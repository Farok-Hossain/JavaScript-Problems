function inchToFeet(inches){
var feet = inches / 12;
return feet;
}

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('nani inches', feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log("nana inches", feet);

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);


function mileToKilometer(mile){
var km = mile * 1.60934;
return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);