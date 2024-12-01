"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input1_1 = require("./input1");
const input2_1 = require("./input2");
try {
    // console.log("Input arrays:\n")
    // console.log(first_list);
    // console.log(second_list);
    // Check if both arrays have the same size
    if (input1_1.first_list.length != input2_1.second_list.length)
        throw "Arrays have differents sizes! Check puzzle input!";
    //Order array elements from smallest to largest
    input1_1.first_list.sort((a, b) => a - b);
    input2_1.second_list.sort((a, b) => a - b);
    // console.log("\nOrdered arrays:\n")
    // console.log(first_list);
    // console.log(second_list);
    let distance_array = [];
    let index = 0;
    input1_1.first_list.forEach(x => {
        if (x > input2_1.second_list[index]) {
            distance_array.push(x - input2_1.second_list[index]);
        }
        else {
            distance_array.push(input2_1.second_list[index] - x);
        }
        index++;
    });
    // console.log("\nDistance between ordered points:\n")
    // console.log(distance_array);
    let result = distance_array.reduce((a, b) => a + b);
    console.log("\nResult:\n");
    console.log(result);
}
catch (error) {
    console.log(error);
}
