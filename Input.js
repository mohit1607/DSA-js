// This file shows how to take input in js using node.js or any js runtime
// here's an example to show how a standard input is taken in js runtime environment

const { resolve } = require('path')
const { stdin } = require('process')
const readlinePackage = require('readline')

// this one using readline pacakge which is by default asynchronous
const readline = readlinePackage.createInterface({
    input: process.stdin,
    output: process.stdout
})

// readline.question("What is your name? \n", (name) => {

//     console.log(`Hi there! ${name}`)
//     readline.close()
// })

const number = Number(readline.question("Enter a number: ",(num) => {
    console.log('your entered number +8 = ',Number(num) + 8 )
    readline.close()
}))
//excellent example and I can also understand it 
// but there is a major problem here is that you should move out of callback
// and use async and await for each input which will be hurdle so 
// there is a third method called read-sync.

