/**
 * array has some duplicate elements
 * []
 */



const biriyaniKhor =['Abul', 'kabul',' habul','dabul','Abul','kabul'];
const number = [1,3,4,5,6,76,7,12,1,2,3,4,5,6,44];

function noDuplicate(array){
    const unique =[];
    for (const item of array){
        if(unique.includes(item) === false){
                unique.push(item)
        }
    }
    return unique;
    // console.log(array);
}
const arrayDuplicate =noDuplicate(biriyaniKhor,number);
console.log(arrayDuplicate);
const arrayDuplicate2 =noDuplicate(number);
console.log(arrayDuplicate2);
