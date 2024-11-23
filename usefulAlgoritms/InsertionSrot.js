// this algorithm just partition the array in two parts
// first sorted and second unsorted so 
// index 0 is considered sorted at first and from index 1 to end is unsortd
// so always pick the first element from the unsorted
// and see where to insert it in sorter array using a loop and thats it


const InsertionSort = (arr) => {
    let temp = 0
    for (let i = 1; i < arr.length; i++) {
        // by default the first element is second element 
        let tracebackLength = i - 1 // -1 because 
        let tracebackIndex = i

        while (tracebackLength >= 0) {
            if (arr[tracebackIndex] < arr[tracebackLength]) {
                // then swap
                temp = arr[tracebackIndex]
                arr[tracebackIndex] = arr[tracebackLength]
                arr[tracebackLength] = temp
                // careful here you may swap with the thigs each time
            }
            tracebackLength--
            tracebackIndex-- // this is because look carefully that the index of the 
            // item which changed postion is now less than i or its previous element
            // tats it
        }
    }
    return arr
}

const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
console.log(InsertionSort(array))