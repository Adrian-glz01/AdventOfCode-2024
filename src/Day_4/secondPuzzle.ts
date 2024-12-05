import * as fs from 'fs';

const filePath = './src/Day_4/puzzleInput.txt';
let content: string[];
let xmasCounter = 0;


const takeX_MAS = (content: string[]):number => 
{
    let result= 0;
    for (let i = 0; i < content.length -2; i++) {
        for (let j = 0; j < content[i].length -3; j++) {
            if (((content[i][j] + content[i+1][j+1] + content[i+2][j+2]) == "MAS") &&  ((content[i][j+2] + content[i+1][j+1] + content[i+2][j]) == "MAS")) 
                result += 1;

            if (((content[i][j] + content[i+1][j+1] + content[i+2][j+2]) == "MAS") &&  ((content[i][j+2] + content[i+1][j+1] + content[i+2][j]) == "SAM")) 
                result += 1;

            if (((content[i][j] + content[i+1][j+1] + content[i+2][j+2]) == "SAM") &&  ((content[i][j+2] + content[i+1][j+1] + content[i+2][j]) == "MAS")) 
                result += 1;

            if (((content[i][j] + content[i+1][j+1] + content[i+2][j+2]) == "SAM") &&  ((content[i][j+2] + content[i+1][j+1] + content[i+2][j]) == "SAM")) 
                result += 1;
        }
        
    }
    return result;
}

try {
    // CONTENT READING
    const fileData = fs.readFileSync(filePath, 'utf-8');
    content = fileData.split('\n');
    content[content.length - 1] += "\r"
    // HORIZONTAL
    xmasCounter += takeX_MAS(content)

} catch (error) {
    
}

console.log(xmasCounter);