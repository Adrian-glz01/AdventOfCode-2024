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
    if (!validAct) {
        validActualizations.push(x);
    }
});
//console.log(validActualizations);
function actualizationSort(pages) {
    const graph = new Map();
    const inDegree = new Map();
    pages.forEach(page => {
        graph.set(page, []);
        inDegree.set(page, 0);
    });
    for (const [from, to] of inputRules_1.Rules) {
        if (graph.has(from) && graph.has(to)) {
            graph.get(from).push(to);
            inDegree.set(to, (inDegree.get(to) || 0) + 1);
        }
    }
    const queue = [];
    for (const [node, degree] of inDegree) {
        if (degree === 0) {
            queue.push(node);
        }
    }
    const sorted = [];
    while (queue.length > 0) {
        const current = queue.shift();
        sorted.push(current);
        for (const neighbor of graph.get(current) || []) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }
    if (sorted.length !== pages.length) {
        throw new Error("No se puede realizar una ordenación válida: el grafo tiene ciclos.");
    }
    return sorted;
}
let notValidActualizationUdpated = [];
validActualizations.forEach(x => {
    notValidActualizationUdpated.push(actualizationSort(x));
});
notValidActualizationUdpated.forEach(x => {
    validPages.push(x[(x.length - 1) / 2]);
});
// console.log(validPages);
console.log(sumCenterPageNumber(validPages));
