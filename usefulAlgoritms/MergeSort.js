// this is in-place merge sort without using auxilary space.
// you should revisit this thing often
// Time compelxity => O(nlogn) 

const MergeSort = (arr) => {
    sort(arr, 0, arr.length - 1) // I may have passed the auxillary array here so that I would not get inplace merge sort
    return arr
}

const sort = (arr, start, end) => {
    if (start === end) return
    let mid = Math.floor(start + (end - start) / 2)
    sort(arr, start, mid)
    sort(arr, mid + 1, end)
    merge(arr, start, mid, end)
}  // this is the merge sort and thats it nothing here all cream is in the merge function

const merge = (arr, start, mid, end) => { // very important cream of  merge sort
    let start2 = mid + 1 // insn't its obcious
    // condition for already sorted optional so the alog will be fast
    if (arr[mid] <= arr[start2]) return // optimization step // because we check
    // if left sorted part last element is less than right sorted parts first element

    // now carefully see we will swap directly the elemtns
    while (start <= mid && start2 <= end) {
        if (arr[start] <= arr[start2]) {
            start++   // nothing will happen if these are already in sorted order
        } else {
            // if it is greater then the swap will happen 
            // so if there is a distance between these elements then 
            // we just store the initial element in a temperoary variable and then
            // we rightshift all the elements between the start and start2 and then 
            // we will make arr[start] = value
            let value = arr[start2]
            let index = start2

            while (index != start) {
                arr[index] = arr[index - 1]
                index--
            }
            arr[start] = value
            // after swapping the pointers goes forward
            start++
            start2++
            mid++
        }
    }

}








const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
console.log(MergeSort(array))