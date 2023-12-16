#!/usr/bin/env node

function fibs(n) {
    let fibNums = [0, 1];
    while (fibNums.length < n) {
        fibNums.push(fibNums.at(-1) + fibNums.at(-2));
    }

    return fibNums;
}

function fibsRec(n, arr = [0, 1]) {
    if (arr.length >= n) return arr;

    arr.push(arr.at(arr.length - 2) + arr.at(arr.length - 1));
    return fibsRec(n, arr);
}
