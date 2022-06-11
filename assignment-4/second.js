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
                
                const result=totalSales(5,5,6); 
                console.log(result);