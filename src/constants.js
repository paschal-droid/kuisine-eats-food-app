export const shuffleArray = (array, n) => {
    const uniqueArray = Array.from(new Set(array.map(item => item._id)))
    .map(id => {
      return array.find(item => item._id === id)
      })
      
    const result = new Set()

    while (result.size < n) {
      const randomIndex = Math.floor(Math.random() * uniqueArray.length)
      result.add(uniqueArray[randomIndex])
    }

    return Array.from(result)
}

export const getRandomRating = () => {
  const min = 3
  const max = 5
  const randomNum = Math.random() * (max - min) + min

  return Math.round(randomNum * 10)/10
}

export const getRandomRatingCount = () => {
  const min = 2000
  const max = 7500
  return Math.floor(Math.random() * (max - min) + min)
}
