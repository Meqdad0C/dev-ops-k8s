const { writeFile } = require('fs')

const app = require('express')()
let string = ''

const randomString = (length = 10) => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('')
  if (!length) {
    length = Math.floor(Math.random() * chars.length)
  }
  let str = ''
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str
}

const generateRandomString = (length) => {
  string = randomString(length)
  setInterval(() => {
    writeFile(
      './files/random-string.txt',
      `Random string: ${string} Time: ${new Date().toLocaleString()}`,
      { flag: 'w' },
      (err) => {
        if (err) {
          console.log(err)
        }
        console.log('Random string saved to file!')
      }
    )

    console.log(string)
  }, 5000)
}

generateRandomString()

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
  res.send(`Random string: ${string} Time: ${new Date().toLocaleString()}`)
})
