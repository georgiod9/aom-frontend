const splitArrayToChunks = (array, perChunk = 2) => {
  const result = array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return result
}

const getRandomElement = (array) => {
  return array[Math.floor((Math.random() * array.length))];
}


export { splitArrayToChunks, getRandomElement }