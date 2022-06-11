// number-3
function deliveryCost(numbers){
const first100Cost = 100;
const second100Cost = 80;
const moreThan200Cost = 50;
   //error message for positive number
   if(numbers < 0){
   return 'please give a positive number' ; } 
   //error message for not number
   if(typeof numbers !='number' ){
   return 'please enter a number' ; }
   if(numbers <=100){ 
     const cost=numbers * first100Cost;
     return cost; } 
        else if(numbers>100 && numbers <=200){
        const firstCost=100 * 100;
        const restDelivery=numbers - 100;
        const secondCost=restDelivery * 80; 
        const totalCost=firstCost + secondCost;
        return totalCost; }
         else if(numbers> 200){
        const firstCost = 100 * 100;
        const secondCost = 100 * 80;
        const restDelivery = numbers - 200;
        const thirdCost = restDelivery * 50;
        const totalCost = firstCost + secondCost + thirdCost;
        return totalCost;
        }
        }

        
        const numbersOfDelivery = deliveryCost(220);
        console.log(numbersOfDelivery);