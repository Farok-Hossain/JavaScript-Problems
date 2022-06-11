function smallestElement(numbers){
let min = numbers[0];
for(let i =0; i < numbers.length; i++){ const element=numbers[i]; if(element < min){ min=element; } } return min; }
    const smallest=smallestElement([50,15,20,17,59,25,36,1,5,24,-2]); console.log(smallest);