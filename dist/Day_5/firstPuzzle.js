"use strict";
// import { Rules } from "./testrules";
// import { Actualizations } from "./testActualizations";
Object.defineProperty(exports, "__esModule", { value: true });
const inputRules_1 = require("./inputRules");
const inputActualization_1 = require("./inputActualization");
const sumCenterPageNumber = (pages) => {
    let result = 0;
    pages.forEach(x => {
        result += x;
    });
    return result;
};
const checkRules = (firstPage, secondPage) => {
    let result = false;
    for (let i = 0; i < inputRules_1.Rules.length; i++) {
        if (inputRules_1.Rules[i][0] == firstPage && inputRules_1.Rules[i][1] == secondPage) {
            result = true;
            break;
        }
    }
    return result;
};
let validActualizations = [];
let validPages = [];
//[75,47,61,53,29]
inputActualization_1.Actualizations.forEach(x => {
    let validAct = true;
    for (let i = 0; i < x.length; i++) {
        let firstPage = x[i];
        for (let j = i + 1; j < x.length; j++) {
            if (!checkRules(firstPage, x[j])) {
                validAct = false;
            }
        }
    }
    if (validAct) {
        validActualizations.push(x);
    }
});
console.log(validActualizations);
validActualizations.forEach(x => {
    validPages.push(x[(x.length - 1) / 2]);
});
console.log(validPages);
console.log(sumCenterPageNumber(validPages));
