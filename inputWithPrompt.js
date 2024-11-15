// This file shows how to take input in js using node.js or any js runtime
// here's an example to show how a standard input is taken in js runtime environment


const prompt = require('prompt-sync')({ sigint: false })


const name = prompt(`Hello there! what is your name? \n`)
console.log(`Hi ${name} you got an really amazing name.`)

// any way I prefer readline even its a boilerplate but it is legit and not appearing more than once
