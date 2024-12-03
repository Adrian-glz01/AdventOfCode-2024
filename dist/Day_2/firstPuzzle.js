"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_e_1_copy_1 = require("./1_e_1 copy");
const checkAllElementsIncrease = (array) => {
    let result = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            result = false;
            break;
        }
    }
    return result;
};
const checkAllElementsDecreases = (array) => {
    let result = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i]) {
            result = false;
            break;
        }
    }
    return result;
};
const checkDifferenceBetweenElements = (type, array) => {
    let result = true;
    if (type == "Increase") {
        for (let i = 1; i < array.length; i++) {
            if ((array[i] - array[i - 1]) > 3 || (array[i] - array[i - 1]) < 1) {
                result = false;
                break;
            }
        }
    }
    else {
        for (let i = 1; i < array.length; i++) {
            if ((array[i - 1] - array[i]) > 3 || (array[i - 1] - array[i]) < 1) {
                result = false;
                break;
            }
        }
    }
    return result;
};
let counter = 0;
_1_e_1_copy_1.input1.forEach(x => {
    if (x[0] > x[1]) {
        if (checkAllElementsDecreases(x)) {
            if (checkDifferenceBetweenElements("Decrease", x)) {
                counter++;
                // console.log("Safe")
            }
            else {
                // console.log("Unsafe")
            }
        }
        else {
            // console.log("Bad Array!")
        }
    }
    if (x[1] > x[0]) {
        if (checkAllElementsIncrease(x)) {
            if (checkDifferenceBetweenElements("Increase", x)) {
                counter++;
                // console.log("Safe")
            }
            else {
                // console.log("Unsafe")
            }
        }
        else {
            // console.log("Bad Array!")
        }
    }
});
console.log(counter);
