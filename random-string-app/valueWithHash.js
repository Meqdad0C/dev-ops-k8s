const { readFile } = require('fs')

const getHashNow = () => {
  const randomHash = Math.random().toString(36).substr(2, 6)
  return randomHash
}


setInterval(() => {
  readFile('./files/random-string.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    // append hash to string
    console.log(data + ' ' + getHashNow())
  })
}, 5000)
