function getFactorial(number){
let factorial =1;
let i= 1;
while(i <= number){ factorial=factorial * i; i++; } return factorial; } const myFactorial=getFactorial(6);
    console.log(myFactorial); function getFactorial(number){ let factorial=1; let i=number; while(i>= 1){
    factorial = factorial * i;
    i--;
    }
    return factorial;
    }
    var fact = getFactorial(8);
    console.log(fact);



    function getFactorial(number){
    let factorial=1;
    for(let i=number; i>=1; i--){
    factorial = factorial * i;
    }
    return factorial;
    }

    var fact2 = getFactorial(10);
    console.log(fact2);