var computer = {
price : 50000,
storage : '256gb',
color: 'silver',
processor : 'ryzen 5 3400g'
};
console.log(computer.processor);

<!-- set a object property value -->
computer.price = 20000;
var computerPrice = computer.price;
console.log(computerPrice);

<!-- different ways to set a value of an object property -->
var colorProperty = "color";

computer[colorProperty] = 'black';
computer.price = 22000;
computer["price"] = 23000;

computer.color = 'white';

console.log(computer);