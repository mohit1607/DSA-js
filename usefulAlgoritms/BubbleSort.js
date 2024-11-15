// bubble sort
// Time complexity O(n^2)

const BubbleSort = (arr, isDescending = false) => {
    let temp = 0;
    // simple for loop approach
    for(let i= 0; i<arr.length-1; i++) { // we will leave the last index here
        for(let j = i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                // swap as go to right
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    if(isDescending) {
        return arr.reverse()
    }
    return arr
}



const array = [8,9,5,781,2,5,0,77,63]
console.log(BubbleSort(array, true))
// its working cool

// Output: 
 // [0,2,5,8,9,63,77,781]