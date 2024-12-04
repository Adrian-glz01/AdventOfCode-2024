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
const filePath = './src/Day_4/puzzleInput.txt';
let content;
let xmasCounter = 0;
const horizontal = (content) => {
    let result = 0;
    content.forEach(x => {
        let patternA = x.match(/XMAS/g);
        let patternB = x.match(/SAMX/g);
        if (patternA) {
            result += patternA.length;
        }
        if (patternB) {
            result += patternB.length;
        }
    });
    // console.log(result);
    return result;
};
const vertical = (content) => {
    let result = 0;
    let changedArray = [];
    for (let i = 0; i < content[0].length - 1; i++) {
        let newChain = "";
        for (let j = 0; j < content.length; j++) {
            newChain += content[j][i];
        }
        changedArray.push(newChain);
    }
    changedArray.forEach(x => {
        let patternA = x.match(/XMAS/g);
        let patternB = x.match(/SAMX/g);
        if (patternA) {
            result += patternA.length;
        }
        if (patternB) {
            result += patternB.length;
        }
    });
    // console.log(result);
    return result;
};
const diagonalUpDown = (content) => {
    let result = 0;
    for (let i = 0; i < content.length - 3; i++) {
        for (let j = 0; j < content[i].length - 4; j++) {
            //console.log((content[i][j] + content[i+1][j+1] + content[i+2][j+2] + content[i+3][j+3]))
            if ((content[i][j] + content[i + 1][j + 1] + content[i + 2][j + 2] + content[i + 3][j + 3]) == "XMAS")
                result += 1;
            if ((content[i][j] + content[i + 1][j + 1] + content[i + 2][j + 2] + content[i + 3][j + 3]) == "SAMX")
                result += 1;
        }
    }
    // console.log(result);
    return result;
};
const diagonalDownUp = (content) => {
    let result = 0;
    for (let i = 0; i < content.length - 3; i++) {
        for (let j = content[i].length - 2; j >= 3; j--) {
            // console.log((content[i][j] + content[i+1][j-1] + content[i+2][j-2] + content[i+3][j-3]));
            // console.log("J:", j, " I=", i)
            if ((content[i][j] + content[i + 1][j - 1] + content[i + 2][j - 2] + content[i + 3][j - 3]) == "XMAS")
                result += 1;
            if ((content[i][j] + content[i + 1][j - 1] + content[i + 2][j - 2] + content[i + 3][j - 3]) == "SAMX")
                result += 1;
        }
    }
    // console.log(result);
    return result;
};
try {
    // CONTENT READING
    const fileData = fs.readFileSync(filePath, 'utf-8');
    content = fileData.split('\n');
    content[content.length - 1] += "\r";
    // HORIZONTAL
    xmasCounter += horizontal(content);
    // VERTICAL
    xmasCounter += vertical(content);
    // DIAGONAL UP-DOWN
    xmasCounter += diagonalUpDown(content);
    // DIAGONAL DOWN-UP
    xmasCounter += diagonalDownUp(content);
}
catch (error) {
}
console.log(xmasCounter);
