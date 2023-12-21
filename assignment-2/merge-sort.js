#!/usr/bin/env node

function mergeArrs(a, b) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            mergedArr.push(a[i]);
            i += 1;
        } else {
            mergedArr.push(b[j]);
            j += 1;
        }
    }

    // push any numbers that were not checked to mergedArr
    if (i < a.length) {
        mergedArr.push(...a.slice(i));
    } else if (j < b.length) {
        mergedArr.push(...b.slice(j));
    }

    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr;

    // sort left half
    let leftArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));

    // sort right half
    let rightArr = mergeSort(arr.slice(Math.floor(arr.length / 2)));

    // merge left and right arrays
    let mergedArr = mergeArrs(leftArr, rightArr);

    return mergedArr;
}

console.log(mergeSort([])); // []
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(mergeSort([6, 5, 4, 3])); // [3, 4, 5, 6]
console.log(mergeSort([6, 6, 5, 4, 4, 3])); // [3, 4, 4, 5, 6, 6]
console.log(mergeSort([1, 1, 1, 1, 1, 1, 2])); // [1, 1, 1, 1, 1, 1, 2]
console.log(mergeSort([2, 1, 1, 3, 2, 2, 3, 3, 1, 1])); // [1, 1, 1, 1, 2, 2, 2, 3, 3, 3]
