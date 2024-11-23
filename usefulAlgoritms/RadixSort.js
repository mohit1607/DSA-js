// Find the highest digit in the array and
// then according to the unit places run count sort that many times.
// Time complexity = O((size of largest element unit places)*10) 


const RadixSort = (arr) => {

    let max = Math.max(...arr) // maximum found so that many times our loop will run
    for (let exponent = 1; max / exponent > 0; exponent *= 10) { // will run the times the maximum digits have place in
        // first check with 1 and then with 10 and then with 100 and so on...
        CountSort(arr, exponent)
    }

    return arr
}


const CountSort = (arr, exponent) => { // first attempt correct solution // iterative solution
    // let max = maximumInArray(arr)
    let countArray = new Array(10).fill(0) // this is the frequency array
    let output = new Array(arr.length).fill(0)

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor((arr[i] / exponent) % 10);
        countArray[index]++;
        // my thinking ok we are increasing the count but when we will be traversing this frequency array like below
        // how will be retriving the original numbers
    }
    // console.log('Count Array for ' + exponent, output)
    // precious step just dry run it to get the knack of it
    for (let i = 1; i < 10; i++) { // sum of previous 2 counts equals current element
        countArray[i] += countArray[i - 1];
        // }
    }
    // console.log('Count Array for ' + exponent, output)
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = Math.floor((arr[i] / exponent) % 10);
        output[countArray[index] - 1] = arr[i];
        countArray[index]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
    // return output
}




const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
console.log(RadixSort(array))