"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input1_1 = require("./input1");
const input2_1 = require("./input2");
try {
    // Check if both arrays have the same size
    if (input1_1.first_list.length != input2_1.second_list.length)
        throw "Arrays have differents sizes! Check puzzle input!";
    let result = 0;
    for (let i = 0; i < input1_1.first_list.length; i++) {
        let repetitionOfEachNumber = 0;
        input2_1.second_list.forEach(x => {
            if (x == input1_1.first_list[i])
                repetitionOfEachNumber++;
        });
        result += input1_1.first_list[i] * repetitionOfEachNumber;
    }
    console.log("Result:\n");
    console.log(result);
}
catch (error) {
    console.log(error);
}
