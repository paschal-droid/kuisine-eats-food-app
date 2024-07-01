import {createSlice} from '@reduxjs/toolkit'


const prevState = {
    username: '',
    isLoggedIn: false
}

export const User = createSlice({
    name: 'user',
    initialState: prevState,
    reducers: {
        signin: (state, action) => {
            return {...state, ...{isLoggedIn: true}, ...action.payload}
        },
        resetToDefault: () => {
            return prevState
        },
    }
});

export const {signin, resetToDefault} = User.actions;


export default User.reducer;