"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const filePath = './src/Day_3/puzzleInput.txt';
let content;
const mul = (x, y) => {
    return x * y;
};
try {
    // CONTENT READING
    content = fs.readFileSync(filePath, 'utf-8');
    //console.log(Content); 
    // PUZZLE SOLVE
    const mulPatternRegex = /mul\((\d,|\d\d,|\d\d\d,)(\d|\d\d|\d\d\d)\)|don\'t\(\)|do\(\)/g;
    const reducedFileConten = content.match(mulPatternRegex);
    //console.log(reducedFileConten);
    let result = 0;
    let validMuls = [];
    if (reducedFileConten) {
        for (let i = 0; i < reducedFileConten.length; i++) {
            if (reducedFileConten[i] == "don't()") {
                while (reducedFileConten[i] != "do()") {
                    i++;
                }
            }
            if (reducedFileConten[i].match(/mul\((\d,|\d\d,|\d\d\d,)(\d|\d\d|\d\d\d)\)/g)) {
                validMuls.push(reducedFileConten[i]);
            }
        }
    }
    //console.log(validMuls);
    validMuls === null || validMuls === void 0 ? void 0 : validMuls.forEach(x => {
        var _a, _b;
        let firstNum = x.match(/\d,|\d\d,|\d\d\d,/g);
        let secondNum = x.match(/,\d\d\d|,\d\d|,\d/g);
        // console.log("First:" + firstNum)
        // console.log("Second:" + secondNum + "\n")
        result += mul(Number((_a = firstNum === null || firstNum === void 0 ? void 0 : firstNum.at(0)) === null || _a === void 0 ? void 0 : _a.replace(",", "")), Number((_b = secondNum === null || secondNum === void 0 ? void 0 : secondNum.at(0)) === null || _b === void 0 ? void 0 : _b.replace(",", "")));
    });
    console.log(result);
}
catch (error) {
    console.error('Error reading the file', error);
}
