//Get the total amount of numbers 
let arraySize = parseInt(prompt("How many numbers?: ")); 

function findThirdHighest(size){
    //Add them an array
    let array = []; 
    for(i=0; i<size; i++){
        array.push(parseInt(prompt("Please choose a number: "))); 
    }
    // Check for the highest, then remove
    // Check for the second highest, then remove
    // Check for third highest, then return.
    let intContainer = 0;
    let index = 0; 
    for(i=0; i < 3; i++){
        intContainer = array[0]; 
        index = 0; 
        for(j=0; j < array.length; j++){
            if(array[j] >= intContainer){
                //Assign intContainer to a new value 
                //And grab the index
                intContainer = array[j];
                index = j; 
            }

            if(j == (array.length - 1)){
                //Remove the top value at the end of the array
                array.splice(index, 1);
            }
            console.log("Current Main index: " + i + " and value: " + intContainer);
        }
        
        //At last iteration return the third highest 
        if(i === 2) return intContainer; 
    }
    
}

console.log(findThirdHighest(arraySize));
