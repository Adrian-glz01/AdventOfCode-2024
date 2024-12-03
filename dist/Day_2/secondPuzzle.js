"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTripleDiffOkay(a, b, c) {
    return isDiffOkay(c, b) && isDiffOkay(b, a);
}
function isDiffOkay(a, b) {
    return (a - b) >= 1 && (a - b) <= 3;
}
function part2(level, reverse = true) {
    let invalidIndex = -1;
    if (reverse) {
        level.reverse();
        const result = part2(level, false);
        if (result)
            return true;
        level.reverse();
    }
    for (let i = 1; i < level.length - 1; i++) {
        if (isTripleDiffOkay(level[i - 1], level[i], level[i + 1]))
            continue;
        if (invalidIndex === -1) { // first invalid index
            invalidIndex = i;
            continue;
        }
        if (invalidIndex - i !== -1)
            return false;
        // Check if we can remove left (no i-1)
        if (isTripleDiffOkay(level[i - 2], level[i], level[i + 1]))
            continue;
        // Check if we can remove center (no i)
        if (isTripleDiffOkay(level[i - 2], level[i - 1], level[i + 1]))
            continue;
        // Check if we can remove right (no i+1)
        if (isTripleDiffOkay(level[i - 2], level[i - 1], level[i]))
            continue;
        return false;
    }
    return true;
}
const _1_e_1_copy_1 = require("./1_e_1 copy");
let counter = 0;
_1_e_1_copy_1.input1.forEach(x => {
    if (part2(x)) {
        counter++;
    }
});
console.log(counter);
