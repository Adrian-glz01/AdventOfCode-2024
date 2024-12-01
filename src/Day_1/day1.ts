import {first_list} from './input1'
import {second_list} from './input2'


try  {

    // console.log("Input arrays:\n")
    // console.log(first_list);
    // console.log(second_list);

    // Check if both arrays have the same size
    if (first_list.length != second_list.length)
        throw "Arrays have differents sizes! Check puzzle input!"; 
    
    //Order array elements from smallest to largest
    first_list.sort((a, b) => a - b);
    second_list.sort((a, b) => a - b);

    // console.log("\nOrdered arrays:\n")
    // console.log(first_list);
    // console.log(second_list);

    let distance_array:number[] = [];

    let index:number = 0;
    first_list.forEach(x => {
        if(x > second_list[index]){
            distance_array.push(x - second_list[index]);
        } else {
            distance_array.push(second_list[index] - x);
        }
        index++;
    });

    // console.log("\nDistance between ordered points:\n")
    // console.log(distance_array);

    let result:number = distance_array.reduce((a,b) => a+b);

    console.log("\nResult:\n")
    console.log(result);
} catch (error){
    console.log(error);
}


