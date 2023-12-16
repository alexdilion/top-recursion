#!/usr/bin/env node

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let seq = [0, 1];
    while (seq.length < n) {
        seq.push(seq.at(-1) + seq.at(-2));
    }

    return seq;
}

console.log(fibonacci(-2)); // []
console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
