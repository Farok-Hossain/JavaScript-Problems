const business = 850;
const minister = 750;
const army = 900;
if( business > minister){
console.log('Business person er pola is bigger');
}
else{
console.log('minister er pola is bigger');
}


<!-- compare 3 person  -->
if( business > minister && business > army){
console.log('business is begger');
}
else if(minister > business && minister > army){
console.log('minister is bigger');
}
else{
console.log('army is bigger');
}


var max = Math.max(business, minister, army);
console.log("largest is ", max);

function findLargest(num1, num2){
if(num1 > num2){
return num1;
}
else {
return num2;
}
}

const larger = findLargest(451,56)
console.log('largest is ', larger);



function findLargest2(n1,n2,n3,n4){
const max = Math.max(n1,n2,n3,n4);
return max;
}
const larger2 = findLargest2(45,20,85,15);
console.log('larger is 4 number: ', larger2);



function findMin(n1,n2,n3,n4){
const min = Math.min(n1,n2,n3,n4);
return min;
}
const minimum = findMin(45,20,85,15);
console.log('minimum is 4 number: ', minimum);