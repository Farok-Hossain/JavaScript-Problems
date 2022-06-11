const fibo = [0,1];
for(let i= 2; i <= 10; i++){
     fibo[i]=fibo[i-1] + fibo[i-2];
     } 
     console.log(fibo);
     function fibonacciSeries(num){ 
         const fibo=[0, 1]; 
         for(let i=2; i <=num; i++){
              fibo[i]=fibo[i-1] + fibo[i-2];
             } 
             return fibo;
             } 
             const fiboSeries=fibonacciSeries(13);
              console.log(fiboSeries); //input type 
    function fibonacciSeries(num){
    if (typeof num != 'number'){
    return 'please give a number';
    }
    const fibo=[0, 1]; 
    for(let i=2; i <=num; i++){
         fibo[i]=fibo[i-1] + fibo[i-2];
         }
          return fibo;
         }
          const fiboSeries=fibonacciSeries(15);
        console.log(fiboSeries);