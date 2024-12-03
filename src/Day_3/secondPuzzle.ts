import * as fs from 'fs';

const filePath = './src/Day_3/puzzleInput.txt';
let content: string;

const mul = (x:number,y:number) =>
{
    return x*y;
}

try {
    // CONTENT READING
    content = fs.readFileSync(filePath, 'utf-8');
    //console.log(Content); 

    // PUZZLE SOLVE
    
    const mulPatternRegex = /mul\((\d,|\d\d,|\d\d\d,)(\d|\d\d|\d\d\d)\)|don\'t\(\)|do\(\)/g;
    
    const reducedFileConten = content.match(mulPatternRegex);
    //console.log(reducedFileConten);
    let result = 0;
    let validMuls: string[] = [];

    if(reducedFileConten)
    {
        for (let i = 0; i < reducedFileConten.length; i++)
        {
            if (reducedFileConten[i] == "don't()") {
                while (reducedFileConten[i] != "do()") {
                    i++;
                }
            }
            if(reducedFileConten[i].match(/mul\((\d,|\d\d,|\d\d\d,)(\d|\d\d|\d\d\d)\)/g))
            {
                validMuls.push(reducedFileConten[i])
            }
        }
    }
    //console.log(validMuls);
    validMuls?.forEach(x => {
        let firstNum = x.match(/\d,|\d\d,|\d\d\d,/g);
        let secondNum = x.match(/,\d\d\d|,\d\d|,\d/g)
        // console.log("First:" + firstNum)
        // console.log("Second:" + secondNum + "\n")
        result += mul(Number(firstNum?.at(0)?.replace(",","")),Number(secondNum?.at(0)?.replace(",","")))
    })
    console.log(result);
} catch (error) {
    console.error('Error reading the file', error);
}
