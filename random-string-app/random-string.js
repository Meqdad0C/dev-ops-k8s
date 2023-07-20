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
  const string = randomString(length)
  setInterval(() => {
    console.log(string)
  }, 5000)
}

generateRandomString()
