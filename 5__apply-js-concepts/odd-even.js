const number = 145;

function isEven(number){
if(number % 2 == 0){
return true;
}
return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even ', isMyNumberEven);

const herNumber = 1892;
const isHerNumberEvent = isEven(herNumber);
console.log('is my number even', isHerNumberEvent);

<!-- odd function -->
function isOdd(number){
if(number % 2 != 0){
return true;
}
return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is her number odd ', isMyNumberOdd);