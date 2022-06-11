function addTwoNumbers(num1, num2){
console.log(num1, num2);
var total = num1 + num2;
return total;
}

var firstNumber = 35;
var secondNumber = 45;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log("result value: ", result);


function multiflyTwoNumbers(Num1, Num2){
var result = Num1 * Num2;
return result;
}
var total = multiflyTwoNumbers(10, 50);
console.log("total after multiplication:", total);


function divisionTwoNumbers(n1,n2){
var result = n1 / n2;
return result;
}

var total = divisionTwoNumbers(20, 5);
console.log('total after division', total );

function subtractTwoNumbers(n1,n2){
var result = n1 - n2;
return result;
}

var total = subtractTwoNumbers(20, 5);
console.log('total after subtract', total);