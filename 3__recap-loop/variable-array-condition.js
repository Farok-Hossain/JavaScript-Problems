var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;
<!-- array -->
var items = ['bottle', 'mug', 'paper', 'pen'];
var a = items.indexOf('bottle');
items.push('banana');
items.push('mango');
items.pop();
if(items.length >= 8){
console.log("You have too many stuff on your desk");
}
else if(items == 4){
console.log("you only have one hali items");
}
else {
console.log("WOW! you have a clean desk.");
}