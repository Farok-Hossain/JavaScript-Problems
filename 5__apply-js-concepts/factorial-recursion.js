function factorialRecursive(n){
if(n==1){
return 1;
}
return n * factorialRecursive(n-1);
}
const myFactorial = factorialRecursive(6);
console.log(myFactorial);