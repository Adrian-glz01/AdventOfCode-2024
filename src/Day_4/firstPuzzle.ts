import * as fs from 'fs';

const filePath = './src/Day_4/puzzleInput.txt';
let content: string[];
let xmasCounter = 0;

const horizontal = (content: string[]):number => {
    let result = 0;
    content.forEach(x => {
        let patternA = x.match(/XMAS/g)
        let patternB = x.match(/SAMX/g)
        if(patternA) {
            result += patternA.length;
        }
        if(patternB)
        {
            result += patternB.length
        }
    });
    // console.log(result);
    return result;
}

const vertical = (content: string[]):number => {
    let result = 0;
    let changedArray: string[] = [];

    for (let i = 0; i <content[0].length - 1; i++)
    {
        let newChain = "";
        for (let j = 0; j < content.length; j++)
        {
            newChain += content[j][i];
        }
        changedArray.push(newChain);
    }
    changedArray.forEach(x => {
        let patternA = x.match(/XMAS/g)
        let patternB = x.match(/SAMX/g)
        if(patternA) {
            result += patternA.length;
        }
        if(patternB)
        {
            result += patternB.length
        }
    });
    // console.log(result);
    return result;
}

const diagonalUpDown = (content: string[]):number => {
    let result = 0;
    for (let i = 0; i < content.length - 3; i++) {
        for (let j = 0; j < content[i].length -4; j++) {
            //console.log((content[i][j] + content[i+1][j+1] + content[i+2][j+2] + content[i+3][j+3]))
            if((content[i][j] + content[i+1][j+1] + content[i+2][j+2] + content[i+3][j+3]) == "XMAS")
                result += 1;

            if((content[i][j] + content[i+1][j+1] + content[i+2][j+2] + content[i+3][j+3]) == "SAMX")
                result += 1;
        }
        
    }
    // console.log(result);
    return result;
}

const diagonalDownUp = (content: string[]):number => {
    let result = 0;
    for (let i = 0; i < content.length - 3; i++) {
        for (let j = content[i].length -2; j >= 3; j--) {
            // console.log((content[i][j] + content[i+1][j-1] + content[i+2][j-2] + content[i+3][j-3]));
            // console.log("J:", j, " I=", i)
            if((content[i][j] + content[i+1][j-1] + content[i+2][j-2] + content[i+3][j-3]) == "XMAS")
                result += 1;

            if((content[i][j] + content[i+1][j-1] + content[i+2][j-2] + content[i+3][j-3]) == "SAMX")
                result += 1;
        }
        
    }
    // console.log(result);
    return result;
}

try {
    // CONTENT READING
    const fileData = fs.readFileSync(filePath, 'utf-8');
    content = fileData.split('\n');
    content[content.length - 1] += "\r"
    // HORIZONTAL
    xmasCounter += horizontal(content);
    // VERTICAL
    xmasCounter += vertical(content);
    // DIAGONAL UP-DOWN
    xmasCounter += diagonalUpDown(content);
    // DIAGONAL DOWN-UP
    xmasCounter += diagonalDownUp(content);

} catch (error) {
    
}

console.log(xmasCounter);