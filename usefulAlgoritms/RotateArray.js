// this will rotate array to the right 
// this means all elements shift to right and last element comes to first

const rotateArray = (array, rotations) => {
    for(let i = 1; i<= rotations; i++) {
        rotateSingle(array)
    }
    return array
}

const rotateSingle = (array) => {
    let firstElement = array[array.length-1] // store last element

    // for(let i = 0; i<array.length-1; i++) {
    //     array[i+1] = array[i]
    // } // this thing have a problem of copying the first elements to all other indexes

    for(let i = array.length-1; i>0; i--) {
        array[i] = array[i-1]
    } // this works because no problem in copying the elements

    array[0] = firstElement
}


const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
console.log(rotateArray(array, 5))

// beautifully executed