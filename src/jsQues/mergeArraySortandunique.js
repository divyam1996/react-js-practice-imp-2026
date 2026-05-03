const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 5, 6, 7, 8, 9];

// Step 1: Merge arrays
const merged = [...arr1, ...arr2]; // [1,2,3,4,2,4,5,6,7,8,9]

// Step 2: Sort the array
const sorted = merged.sort((a, b) => a - b); // [1,2,2,3,4,4,5,6,7,8,9]

// Step 3: Remove duplicates using filter + indexOf
const uniqueSorted = sorted.filter((item, index, arr) => arr.indexOf(item) === index);

console.log(uniqueSorted);