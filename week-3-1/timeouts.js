// graceful exit
// the foundation of robust asynchronous programming

console.log('3')
console.log('4')
console.log('5')

setTimeout(() => {
  console.log(6)
}, 7000)

setTimeout(() => {
  console.log('7')
}, 5000)

setTimeout(() => {
  console.log('0')
}, 8000)

process.on('SIGINT', (code) => {
  console.log(`BYE!`)
  process.exit()
})

process.on('exit', (code) => {
  console.log(`BYE again!! ${code}`)
})
