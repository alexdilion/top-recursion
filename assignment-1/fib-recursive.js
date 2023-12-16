#!/usr/bin/env node

function fibonacci(n, arr = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (arr.length >= n) return arr;

    arr.push(arr.at(arr.length - 2) + arr.at(arr.length - 1));
    return fibonacci(n, arr);
}

console.log(fibonacci(-2)); // []
console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
