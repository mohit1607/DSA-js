// this is a non comparision based sorting technique which uses index
// its good for smaller numbers
// but for large number comes his big brother Radix sort


const CountSort = (arr) => { // first attempt correct solution
    let max = maximumInArray(arr)
    // shortcut may be   max = Math.max(...arr)
    const frequencyArray = new Array(max + 1).fill(0) // this is already dynamic so no over head but we must create array filled with zero
    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++ // index is increased by 1
    }
    // let resultArray = []
    let index = 0
    for (let i = 0; i < frequencyArray.length; i++) {
        if (frequencyArray[i] == 0) continue
        while (frequencyArray[i] != 0) {
            // resultArray.push(i) // this is auxillary space 
            arr[index] = i // while this is not using any auxillary space
            index++
            frequencyArray[i]--
        }
    }
    // return resultArray
    return arr
} // but if you want to mimic the hashmap of javascript then you can use the object here in place of hashmap.


const maximumInArray = (arr) => {
    let max = Number.MIN_VALUE // this works for both -ve numbers and +ve numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

const array = [3, 2, 5, 5, 2, 5, 0, 3, 4, 6, 7, 4, 8, 7, 8]
console.log((array))
console.log(CountSort(array))