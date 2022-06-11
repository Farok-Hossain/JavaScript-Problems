function largestElement(numbers){
let largest = numbers[0];
for(let i=0; i < numbers.length; i++){ let element=numbers[i]; if(element> largest){
    largest = element;

    }

    }
    return largest;
    }
    const ages = [12,22,15,14,16,19,23,18];
    const oldest = largestElement(ages);
    console.log('oldest is: ',oldest);
    const oldest2 = largestElement([-12,-9,-17]);
    console.log('oldest for negative valur: ',oldest2);



    function lowestElement(numbers){
    let lowest =0;
    for (let i=0; i < numbers.length; i++){ let element=numbers[i]; if(element < lowest){ lowest=element; } } return
        lowest; } const num=[10,25,05,85,14,65,1,2,85]; const smaller=lowestElement(num); console.log('small value
        is: ', smaller);