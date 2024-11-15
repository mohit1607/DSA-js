// Time Complexity: O(n^2) 


const SelectionSort = (arr) => {
    // partition method choose first element and then compare it with the smallest element
    // in the right sub array,  it rather Seems to be a recursive solution.
    // first Iteration
    let temp = 0

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Find the minimum element in the unsorted part
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Only swap if a smaller element is found
        if (arr[i] > arr[minIndex]) {
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr
}

const SelectionSrotRecursive = (arr, startIndex) => {
    // base condtion
    if (startIndex > arr.length - 1) {
        return arr
    }

    // swapping will happen in just the outward for loop is recused here
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    // Swap the smallest element with the current element
    if (arr[startIndex] > arr[minIndex]) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[startIndex];
        arr[startIndex] = temp;
    }

    // recursive call only
    return SelectionSrotRecursive(arr, startIndex + 1);
}


const array = [8, 9, 5, 781, 2, 5, 0, 77, 63]
console.log(SelectionSort(array))
console.log(SelectionSrotRecursive(array, 0))

