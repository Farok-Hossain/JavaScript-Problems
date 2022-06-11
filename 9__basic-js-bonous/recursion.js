let total = 0;
for(let i=6; i >= 1; i--){ total +=i; } console.log(total);


function sum(i){
if(i == 1){
return 1;
}
return i + sum(i-1);
}

console.log(sum(7));