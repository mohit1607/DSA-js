// Yet another sort algorithm
// Rearrange the array around the pivot. 
// After partitioning, all elements smaller than the pivot will be on its left, 
// and all elements greater than the pivot will be on its right. The pivot is then in its correct 
// position, and we obtain the index of the pivot.
// divide and conquer approach
// it covers both recursion and two pointers same time so interview material but the hell I am not stuyding these for interview


export const QuickSort = (arr) => {
    sort(arr, 0, arr.length - 1)
    return arr
}

// this is divid and conquer part
const sort = (arr, start, end) => {
    if (start < end) {  // base condition for stopping recursion
        let pivot = PartitionOnPivot(arr, start, end)
        sort(arr, start, pivot - 1)
        sort(arr, pivot + 1, end)
    }
}

// this is the cream of this algorithm
const PartitionOnPivot = (arr, start, end) => {
    // if I pick the pivot at the end element of array then it is not good cuz will hit the worst case each time
    // so we will choose middle index as pivot 
    // also I sort of doens'nt understood when we take the pivot as last element.
    let mid = Math.floor(start + (end - start) / 2)
    let pivot = arr[mid]
    let left = start, right = end  // pointers for separating smaller and larger elements to the partition according to the pivot
    while (left <= right) {
        // if (left <= right && arr[left] > pivot && arr[right] < pivot) { // this may keep going on forever because you didnt mentioned that left should be <= right in this case
        //     then only the swapping happens
        //     let temp = arr[left]
        //     arr[left] = arr[right]
        //     arr[right] = temp
        //     left++
        //     right--
        // }  // this will definately result in infinite loop what you can do is below second if condition
        while (arr[left] < pivot) { // at first I used if clause but now using while cuz it will eventually reach the element which is greater than pivot
            left++
        } // if i use if condition here then pionter slides forward otherwise the pointer will remain stopped at this element
        while (arr[right] > pivot) { // at first I used if clause but now using while cuz it will eventually reach the element which is lesser than pivot
            right--
        } // if i use if condition here then pionter slides forward otherwise the pointer will remain stopped at this element
        if (left <= right) { // this code will only reached if both of above conditions doesnt hold
            [arr[left], arr[right]] = [arr[right], arr[left]]; // swapping shortcut in js.
            left++;
            right--;
        }
    }
}

// here's the banger the javascirpt specific approch making it super fast and less code
// with combining javascript capabilities

const QuickSortJs = (arr) => {
    if (arr.length === 0) return []
    let left = [], right = [], pivot = arr[0] // taking first element as pivot
    for (let i = 1; i < arr.length; i++) { // starting from second index cuz pivot is first one
        // soooo simple
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i]) // soooooooo simple
        }
    }

    return QuickSortJs(left).concat(pivot, QuickSortJs(right))
    // concating both the left and right to pivot and returning
}


const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
// console.log(QuickSort(array))
console.log(QuickSortJs(array))


// You need to learn about the time complexity
// https://www.youtube.com/watch?v=mV3wrLBbuuE 
