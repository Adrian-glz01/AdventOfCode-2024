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
    if (!validAct) {
        validActualizations.push(x);
    }
});

//console.log(validActualizations);

function actualizationSort(pages: number[]): number[] {
    const graph: Map<number, number[]> = new Map();
    const inDegree: Map<number, number> = new Map();

    pages.forEach(page => {
        graph.set(page, []);
        inDegree.set(page, 0);
    });

    for (const [from, to] of Rules) {
        if (graph.has(from) && graph.has(to)) {
            graph.get(from)!.push(to); 
            inDegree.set(to, (inDegree.get(to) || 0) + 1); 
        }
    }

    const queue: number[] = [];
    for (const [node, degree] of inDegree) {
        if (degree === 0) {
            queue.push(node);
        }
    }

    const sorted: number[] = [];
    while (queue.length > 0) {
        const current = queue.shift()!; 
        sorted.push(current); 

        for (const neighbor of graph.get(current) || []) {
            inDegree.set(neighbor, inDegree.get(neighbor)! - 1);

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

let notValidActualizationUdpated: number[][] = [];
validActualizations.forEach(x => {
    notValidActualizationUdpated.push(actualizationSort(x));
})

notValidActualizationUdpated.forEach(x => {
    validPages.push(x[(x.length - 1)/2])
});

// console.log(validPages);
console.log(sumCenterPageNumber(validPages));

