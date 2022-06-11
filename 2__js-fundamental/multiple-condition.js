var gotJob = true;
var moneySaved = 250000;
var hasFlat = false;

if(gotJob == true && moneySaved > 200000 && hasFlat == true){
console.log("treat dibo");
}
else {
console.log("tor kopale treat nai");
}

if((gotJob == true && moneySaved > 200000) || hasFlat == true){
console.log("treat dibo");
}
else {
console.log("tor kopale treat nai");
}