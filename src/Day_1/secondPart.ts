import { first_list } from "./input1";
import { second_list } from "./input2";

try {

    // Check if both arrays have the same size
    if (first_list.length != second_list.length)
        throw "Arrays have differents sizes! Check puzzle input!"; 

    let result = 0;

    for (let i = 0; i < first_list.length; i++)
    {
        let repetitionOfEachNumber = 0;
        second_list.forEach(x => 
        {
            if (x == first_list[i])
                repetitionOfEachNumber++;
        });
        result += first_list[i] * repetitionOfEachNumber;
    }

    console.log("Result:\n")
    console.log(result);
} catch (error)
{
    console.log(error);
}