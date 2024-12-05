// import { Rules } from "./testrules";
// import { Actualizations } from "./testActualizations";

import { Rules } from "./inputRules";
import { Actualizations } from "./inputActualization";

const sumCenterPageNumber = (pages: number[]): number => {
    let result = 0;
    pages.forEach(x => {
        result += x;
    })
    return result;
}

const checkRules = (firstPage:number, secondPage:number): boolean => {
    let result = false;
    for (let i = 0; i < Rules.length; i++)
    {
        if (Rules[i][0] == firstPage && Rules[i][1] == secondPage)
            {
                result =  true;
                break;
            }
    }
    return result;
}

let validActualizations: number[][] = [];
let validPages: number[] = [];

//[75,47,61,53,29]
Actualizations.forEach(x => {
    let validAct = true;
    for (let i = 0; i < x.length; i++)
    {
        let firstPage = x[i];
        for (let j = i + 1; j < x.length ; j++) {
            if(!checkRules(firstPage,x[j]))
            {
                validAct = false;
            }
        }
    }
    if (validAct) {
        validActualizations.push(x);
    }
});

// console.log(validActualizations);

validActualizations.forEach(x => {
    validPages.push(x[(x.length - 1)/2])
});

// console.log(validPages);
console.log(sumCenterPageNumber(validPages));

