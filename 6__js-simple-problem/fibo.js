function fiboSeries(num){
    let fibo = [0, 1];
    for(let i=2; i<= num; i++){
        fibo [i]= fibo[i-1]+ fibo[i-2];
    }
    return fibo;
}

const result = fiboSeries(15);
console.log(result);