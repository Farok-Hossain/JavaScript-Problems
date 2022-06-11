// number-1
function seerToMon(seer){
    // error message for negative value
    if(seer < 0){
    return 'please enter a positive number' ;
    }
    //error message for not number
    if(typeof seer !='number' ){
    return 'please give a number' ;
    }

    const totalMon=seer / 40;
    return totalMon; 
    }

    // number-2
function totalSales(shirt, pant, shoe){
    // error message for not number
    if(typeof(shirt && pant && shoe) != 'number'){
    return 'please give a number';
    }
    // error message for negative number
    if(shirt < 0){
    return 'please enter a positive number' ; } 
    if(pant < 0){ 
        return 'please enter a positive number' ; }
    if(shoe < 0){
        return 'please enter a positive number' ; }
        
        const perShirtPrice=100;
        const perPantPrice=200;
        const perShoePrice=500;
        const totalShirtPrice=shirt * perShirtPrice;
        const totalPantPrice=pant * perPantPrice;
        const totalShoePrice=shoe * perShoePrice;
        const totalPrice=totalPantPrice + totalShirtPrice + totalShoePrice;
             return totalPrice; 
           }

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

            // number-4
function perfectFriend(names) {
    // error message for not string
    if(typeof (names) !='object' ){
    return 'please enter a string' ; }
    for (var i = 0; i < names.length; i++) {
    if (names[i].length==5) { 
    return names[i]; } 
    } }