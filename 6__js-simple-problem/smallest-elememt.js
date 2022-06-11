function lowestElement(numbers){
let lowest =0;
for (let i=0; i < numbers.length; i++){ let element=numbers[i]; if(element < lowest){ lowest=element; } } return lowest;
    } const num=[10,25,5,85,14,65,1,2,85]; const smaller=lowestElement(num); console.log('small value is: ', smaller);