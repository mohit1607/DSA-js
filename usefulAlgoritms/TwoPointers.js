// Time complexity: O(n^2) want to know why then google it
// its because the iterations are still that much even if you 
// cleverly managed to do it in one while loop
// carefully see that start is not incrementing every iteration but only when the end 
// reaches the start+1. so thats why O(n^2)


const TwoPointers = (arr) => {
    //only one while loop is here
    let start = 0
    let end = start + 1
    // let end = start + 1  (optional straight approach)
    let temp = 0 // temperoary variable
    while (start < arr.length - 1) {

        if (arr[start] > arr[end]) {
            // swapping condition
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
        end++

        if (end == arr.length) {
            start++
            end = start + 1
        }
    }
    return arr
}


const TwoPointers2 = (arr) => {
    //only one while loop is here
    let start = 0
    let end = arr.length - 1
    // let end = start + 1  (optional straight approach)
    let temp = 0 // temperoary variable
    while (start < arr.length - 1) {

        if (arr[start] > arr[end]) {
            // swapping condition
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
        end--

        if (end == start) {
            start++
            end = arr.length - 1
        }
    }
    return arr
}


const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
console.log(TwoPointers2(array))


// whatever it is the 2 pointers will be handy majority of time.