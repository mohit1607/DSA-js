# JavaScript Array Methods

Here’s a list of useful JavaScript array methods with short descriptions and example usage:

| **Method**            | **Description**                                                                                         | **Example**                                                                                                  |
|-----------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **`push()`**           | Adds one or more elements to the end of an array and returns the new length of the array.                | `const arr = [1, 2, 3]; arr.push(4); // [1, 2, 3, 4]`                                                        |
| **`pop()`**            | Removes the last element from an array and returns that element.                                          | `const arr = [1, 2, 3]; const last = arr.pop(); // Returns 3, [1, 2]`                                        |
| **`shift()`**          | Removes the first element from an array and returns that element.                                         | `const arr = [1, 2, 3]; const first = arr.shift(); // Returns 1, [2, 3]`                                      |
| **`unshift()`**        | Adds one or more elements to the beginning of an array and returns the new length of the array.           | `const arr = [2, 3]; arr.unshift(1); // [1, 2, 3]`                                                            |
| **`concat()`**         | Merges two or more arrays into a single array and returns a new array.                                    | `const arr1 = [1, 2]; const arr2 = [3, 4]; const result = arr1.concat(arr2); // [1, 2, 3, 4]`               |
| **`slice()`**          | Returns a shallow copy of a portion of an array, defined by start and end indices (non-destructive).      | `const arr = [1, 2, 3, 4]; const result = arr.slice(1, 3); // [2, 3]`                                         |
| **`splice()`**         | Changes the contents of an array by removing or replacing existing elements and/or adding new elements.    | `const arr = [1, 2, 3, 4]; arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4], removed: [2, 3]`                   |
| **`forEach()`**        | Executes a provided function once for each array element (no return value).                              | `const arr = [1, 2, 3]; arr.forEach(num => console.log(num)); // Logs 1, 2, 3`                                |
| **`map()`**            | Creates a new array populated with the results of calling a provided function on every element in the array. | `const arr = [1, 2, 3]; const doubled = arr.map(num => num * 2); // [2, 4, 6]`                              |
| **`filter()`**         | Creates a new array with all elements that pass the test implemented by the provided function.            | `const arr = [1, 2, 3, 4]; const even = arr.filter(num => num % 2 === 0); // [2, 4]`                         |
| **`reduce()`**         | Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. | `const arr = [1, 2, 3, 4]; const sum = arr.reduce((acc, num) => acc + num, 0); // 10`                         |
| **`find()`**           | Returns the first element in the array that satisfies the provided testing function.                     | `const arr = [5, 10, 15, 20]; const found = arr.find(num => num > 10); // 15`                                |
| **`findIndex()`**      | Returns the index of the first element in the array that satisfies the provided testing function.         | `const arr = [5, 10, 15, 20]; const foundIndex = arr.findIndex(num => num > 10); // 2`                        |
| **`some()`**           | Checks if at least one element in the array satisfies the provided testing function.                      | `const arr = [1, 2, 3]; const hasEven = arr.some(num => num % 2 === 0); // true`                            |
| **`every()`**          | Checks if all elements in the array satisfy the provided testing function.                               | `const arr = [2, 4, 6]; const allEven = arr.every(num => num % 2 === 0); // true`                            |
| **`includes()`**       | Checks if a certain element exists in the array (returns `true` or `false`).                             | `const arr = [1, 2, 3]; const hasTwo = arr.includes(2); // true`                                               |
| **`indexOf()`**        | Returns the index of the first occurrence of a specified element, or `-1` if it’s not found.             | `const arr = [1, 2, 3]; const index = arr.indexOf(2); // 1`                                                    |
| **`lastIndexOf()`**    | Returns the index of the last occurrence of a specified element, or `-1` if it’s not found.              | `const arr = [1, 2, 3, 2]; const lastIndex = arr.lastIndexOf(2); // 3`                                        |
| **`sort()`**           | Sorts the elements of an array in place (mutates the original array) according to a specified compare function. | `const arr = [4, 2, 3, 1]; arr.sort(); // [1, 2, 3, 4]` (alphabetical or numerical sorting)` |
| **`reverse()`**        | Reverses the elements of an array in place (mutates the original array).                                 | `const arr = [1, 2, 3]; arr.reverse(); // [3, 2, 1]`                                                          |
| **`join()`**           | Joins all elements of an array into a string, separated by a specified separator (default is a comma).    | `const arr = [1, 2, 3]; const result = arr.join('-'); // '1-2-3'`                                             |
| **`flat()`**           | Flattens a nested array into a single array, to a specified depth.                                        | `const arr = [1, [2, 3], [4, 5]]; const result = arr.flat(); // [1, 2, 3, 4, 5]`                             |
| **`flatMap()`**        | First maps each element using a mapping function, then flattens the result into a new array.              | `const arr = [1, 2, 3]; const result = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]`                 |
| **`at()`**             | Returns the element at a specified index (positive or negative).                                         | `const arr = [1, 2, 3]; const result = arr.at(1); // 2, arr.at(-1); // 3`                                      |
| **`copyWithin()`**     | Shallow copies a part of an array to another location in the same array and returns the modified array.   | `const arr = [1, 2, 3, 4]; arr.copyWithin(0, 2); // [3, 4, 3, 4]`                                             |
| **`fill()`**           | Changes all elements in an array to a static value, from a start index to an end index (inclusive).       | `const arr = [1, 2, 3, 4]; arr.fill(0, 1, 3); // [1, 0, 0, 4]`                                                |
| **`from()`**           | Creates a new array instance from an array-like or iterable object.                                       | `const arr = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']`                                                |
| **`keys()`**           | Returns a new Array Iterator object that contains the keys (indices) of the array.                        | `const arr = ['a', 'b', 'c']; const iterator = arr.keys(); for (let key of iterator) console.log(key);`      |
| **`values()`**         | Returns a new Array Iterator object that contains the values of the array.                                | `const arr = ['a', 'b', 'c']; const iterator = arr.values(); for (let value of iterator) console.log(value);` |
| **`entries()`**        | Returns a new Array Iterator object that contains key-value pairs for each index and its corresponding value. | `const arr = ['a', 'b', 'c']; const iterator = arr.entries(); for (let entry of iterator) console.log(entry);` |

---

### How to Use:
- Copy the methods from this table and try running the examples in your browser's developer console or in a Node.js environment.
``
