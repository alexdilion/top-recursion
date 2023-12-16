#!/usr/bin/env node

function fibs(n) {
    let fibNums = [0, 1];
    while (fibNums.length < n) {
        fibNums.push(fibNums.at(-1) + fibNums.at(-2));
    }

    return fibNums;
}
