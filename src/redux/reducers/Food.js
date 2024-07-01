import {createSlice} from '@reduxjs/toolkit'
import { client, urlFor } from '../../api/client'


const prevState = {
    items: [],
    favoritesList: [],
    cartList: [],
    orderHistoryList: [],
    cartPrice: 0,
    createOrder: {isActive: false, number: '', address: ''}
}

export const Food = createSlice({
    name: "food",
    initialState: prevState,
    reducers: {
        setFoodItems: (state, action) => {
            return {...state, items: action.payload}
        },
        updateImageUrl: (state, action) => {
            return {...state, items: state.items.map(food => 
                food._id === action.payload.foodId ? 
                {...food, image: action.payload.image, favorite: action.payload.favorite}
                : food
            )}
        },
        addToCart: (state, action) => {
            const cartItem = action.payload;
            let found = false;
      
            for (let i = 0; i < state.cartList.length; i++) {
              if (state.cartList[i].id === cartItem.id) {
                let sizeFound = false;
                for (let p = 0; p < state.cartList[i].prices.length; p++) {
                  if (state.cartList[i].prices[p].size === cartItem.prices[0].size) {
                    sizeFound = true;
                    state.cartList[i].prices[p].quantity++;
                    break;
                  }
                }
      
                if (!sizeFound) {
                  state.cartList[i].prices.push(cartItem.prices[0]);
                }
                state.cartList[i].prices.sort((a, b) => (a.size > b.size ? -1 : a.size < b.size ? 1 : 0));
                found = true;
                break;
              }
            }
      
            if (!found) {
              state.cartList.push(cartItem);
            }
        },
        calculateCartPrice: (state, action) => {
            let totalPrice = 0
            for (let i = 0; i < state.cartList.length; i++) {
                let tempPrice = 0;
                for (let p = 0; p < state.cartList[i].prices.length; p++) {
                   tempPrice = tempPrice + parseFloat(state.cartList[i].prices[p].price) * parseFloat(state.cartList[i].prices[p].quantity) 
                }
                state.cartList[i].itemPrice = tempPrice.toFixed(2).toString()
                totalPrice = totalPrice + tempPrice
            }
            state.cartPrice = totalPrice.toFixed(2).toString()
        },
        addToFavorites: (state, action) => {
            const id = action.payload
            for (let i = 0; i < state.items.length; i++) {
                if(state.items[i]._id == id){
                    if(!state.items[i].favorite){
                        state.items[i].favorite = true;
                        state.favoritesList.unshift(state.items[i])
                    } else {
                        state.items[i].favorite = false;
                      }
                break;
                }
            }
        },
        removeFromFavorites: (state, action) => {
            const id = action.payload
            for (let i = 0; i < state.items.length; i++) {
                if(state.items[i]._id === id){
                    if(state.items[i].favorite){
                        state.items[i].favorite = false;
                    }
                break;
                }
            }
            let spliceIndex = -1
            for (let i = 0; i < state.favoritesList.length; i++) {
                if(state.favoritesList[i]._id == id) {
                    spliceIndex = i
                    break
                }
            }
            state.favoritesList.splice(spliceIndex, 1)
        },
        incrementCartItemQuantity: (state, action) => {
            const {id, size} = action.payload
            for (let i = 0; i < state.cartList.length; i++) {
                if(state.cartList[i].id == id){
                    for (let q = 0; q < state.cartList[i].prices.length; q++) {
                        if(state.cartList[i].prices[q].size == size){
                            state.cartList[i].prices[q].quantity++;
                            break
                        }
                    }
                }
            }
        },
        decrementCartItemQuantity: (state, action) => {
            const {id, size} = action.payload

            for (let i = 0; i < state.cartList.length; i++) {
                if(state.cartList[i].id == id){
                    for (let q = 0; q < state.cartList[i].prices.length; q++) {
                        if(state.cartList[i].prices[q].size == size){
                            if(state.cartList[i].prices.length > 1){
                                //! to decrease the quantity if there's more than 1
                                if(state.cartList[i].prices[q].quantity > 1){
                                    state.cartList[i].prices[q].quantity--;
                                } else {
                                //! to remove the price (price, size, quantity, currency) item if there is only 1 quantity of it
                                    state.cartList[i].prices.splice(q, 1)
                                }
                            } else {
                                //! to remove the entire cartItem from the list if the lenth of the price is less than 1
                                if (state.cartList[i].prices[q].quantity > 1) {
                                    state.cartList[i].prices[q].quantity--;
                                } else {
                                    state.cartList.splice(i, 1)
                                }
                            }
                            break;
                        }
                    }
                }
            }
        },
        removeCartItem: (state, action) => {
            const {id} = action.payload
            let spliceIndex = -1
            for (let i = 0; i < state.cartList.length; i++) {
                if(state.cartList[i].id == id){
                    spliceIndex = i
                    break
                }
            }
            state.cartList.splice(spliceIndex, 1)
        },
        addToOrderHistoryList: (state, action) => {
            let temp = state.cartList.reduce(
                (accumalator, currentValue) =>
                  accumalator + parseFloat(currentValue.itemPrice),
                0,
            );
            if(state.orderHistoryList.length > 0) {
                state.orderHistoryList.unshift({
                    orderDate: new Date().toDateString()+' '+new Date().toLocaleTimeString(),
                    cartList: state.cartList,
                    cartListPrice: temp.toFixed(2).toString(),
                    address: state.createOrder.address,
                    number: state.createOrder.number
                })
            }else {
                state.orderHistoryList.push({
                    orderDate: new Date().toDateString()+' '+new Date().toLocaleTimeString(),
                    cartList: state.cartList,
                    cartListPrice: temp.toFixed(2).toString(),
                    address: state.createOrder.address,
                    number: state.createOrder.number
                })
            }
            state.cartList = []
        },
        updateOrderState: (state, action) => {
            const {address, number} = action.payload
            return {...state, createOrder: {isActive: !state.createOrder.isActive, address: address, number: number}}
        },
        resetToDefault: (state) => {
            return {...state, orderHistoryList: []}
        },
    }
})

export const {setFoodItems, resetToDefault, updateImageUrl, addToCart, calculateCartPrice, removeFromFavorites, addToFavorites, incrementCartItemQuantity, decrementCartItemQuantity, removeCartItem, addToOrderHistoryList, updateOrderState} = Food.actions;

// Thunk action to fetch user data from Firestore
export const fetchFoodItems = () => async (dispatch) => {
    try {
        const query = '*[_type != "order"]';
        const food = await client.fetch(query)
        const filteredItem = food.filter((item) => item.image !== undefined)
        dispatch(setFoodItems(filteredItem))
    } catch (error) {
        console.error('Error fetching Food Items:', error);
    }
};

export const generateImageUrlForFoodItems = () => {
    return async (dispatch, getState) => {
        const state = getState(); // Get the entire state
        const { items } = state.food;
        if(items.length !== 0){
            for(const item of items){
                if(item.image === undefined){
                   continue
                }
                const src = urlFor(item.image).url()
                dispatch(updateImageUrl({foodId: item._id, image: src, favorite: false}))
            } 
            }else {
                return
        }
    }
}





export default Food.reducer;