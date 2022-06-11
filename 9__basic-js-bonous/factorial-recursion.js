let factorial = 1;
for(i = 6; i>=1; i--){
factorial = factorial * i;
}
console.log(factorial);



function fact(i){
if(i == 1){
return 1;
}

return i * fact(i-1);
}

console.log(fact(7));