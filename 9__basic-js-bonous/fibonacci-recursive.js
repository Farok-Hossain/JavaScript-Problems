function fibonacci(i){
if(i == 0){
return 0;
}
if(i == 1){
return 1;
}
return fibonacci(i-1) + fibonacci(i-2);
}

console.log(fibonacci(8));



const fibo = [0, 1];
for(let i =2; i <=12; i++){ fibo[i]=fibo[i-1] + fibo[i-2]; } console.log(fibo);