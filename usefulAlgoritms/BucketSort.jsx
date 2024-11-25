// it is similar to the radix sort but use buckets on indexes instead of
// unit places thigns
// You should normally only use bucket sort when you generally know that elements will be evenly distributed,
// and when memory usage is not an issue.

const InsertionSort = (arr) => {
    let temp = 0
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let index = i

        while (j >= 0) {
            if (arr[j] < arr[index]) {
                temp = arr[j]
                arr[j] = arr[index]
                arr[index] = temp
            }
            j--
            index--
        }
    }
}


const BucketSortForDecimals = (arr) => { // for point values  0.23 0.1 0.4
    let n = arr.length
    // define all the bucekts 
    // let bukcetArray = new Array(arr.length).fill([])
    // The fill() method fills all the slots in the array with the exact same reference.So, all elements in the array will point to the same empty array.This can cause unintended behavior if you try to modify one of the inner arrays because all of them will be affected
    // so we are using from 
    let bucketArray = Array.from({ length: n }, () => [])
    // let bucketArray = Array.from({ length: n }, () => new Array())
    // this is array of arrays
    // let bucketArray = [];
    // for (let i = 0; i < n; i++) {
    //     bucketArray[i] = []; // Assign each bucket as an empty array
    // }

    for (let i = 0; i < n; i++) {
        let bucketIndex = Math.floor(arr[i] * n) // this is the basis on which we are deciding the index
        bucketArray[bucketIndex].push(arr[i])
    }

    // now sort every bucket
    for (let i = 0; i < n; i++) {
        if (bucketArray[i].length > 0) { // Sort only non-empty buckets
            InsertionSort(bucketArray[i]);
        }
    }

    // moving all the elements from buckets to array that is result
    let index = 0
    for (let i = 0; i < n; i++) {  // be careful haha this is 2d array
        for (let j = 0; j < bucketArray[i].length; j++) {
            arr[index++] = bucketArray[i][j];
        }
    }

    return arr
}

const BucketSortForIntegers = (arr) => { // for point values  0.23 0.1 0.4
    let n = arr.length;

    // Find the maximum value in the array to normalize the values
    let maxVal = Math.max(...arr);

    // Create the bucket array (initialize n empty buckets)
    let bucketArray = [];
    for (let i = 0; i < n; i++) {
        bucketArray[i] = [];
    }

    // Place each element in the appropriate bucket
    for (let i = 0; i < n; i++) {
        // Normalize the value and calculate the bucket index
        let bucketIndex = Math.floor((arr[i] / maxVal) * n);  // Normalize and scale the index
        bucketArray[bucketIndex].push(arr[i]);
    }

    // Sort each bucket using Insertion Sort
    for (let i = 0; i < n; i++) {
        if (bucketArray[i].length > 0) {  // Sort only non-empty buckets
            InsertionSort(bucketArray[i]);
        }
    }

    // Merge the sorted elements from all buckets back into the original array
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < bucketArray[i].length; j++) {
            arr[index++] = bucketArray[i][j]; // Rebuild the sorted array
        }
    }

    return arr;
}


const arrayIntegers = [8, 9, 5, 781, 2, 5, 0, 77, 63]
const array = [0.1, 0.23, 0.32, 0.42, 0.58, 0.72, 0.87, 0.91]
// console.log(BucketSortForDecimals(array)) // wokring correctly
console.log(BucketSortForIntegers(arrayIntegers)) 