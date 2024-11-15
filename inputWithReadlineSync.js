const readLine = require('readline-sync')

// const number = Number(readLine.question('Enter the number: '))

// console.log('Your number + 8 = ', number + 8)

// this is very utiliterian and beautiful and easy 
// on other hand it auto closes the prompt when input is taken


// lets try a loop 
let arr = []

for(let i= 0; i< 3; i++) {
    arr.push(readLine.question('Enter the number: ')) // its reading strings
}

console.log(arr)

// cool its working

arr = []

for(let i= 0; i< 3; i++) {
    arr.push(Number(readLine.question('Enter the number: '))) // its reading strings
}

console.log(arr)

// this is the perfect fit for taking input in dsa for javascirpt.