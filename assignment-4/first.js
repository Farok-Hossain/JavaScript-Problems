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
    
    const result=seerToMon(120);
     console.log(result);