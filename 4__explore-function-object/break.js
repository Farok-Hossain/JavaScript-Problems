for (var i = 0; i < 10; i++){ console.log(i); if(i==5){ break; } } var numbers=[54, 35, 21, 98, 23, 101, 45, 67];
    for(var i=0; i< numbers.length; i++){ var number=numbers[i]; console.log(number); if (number>100 ){
    break;
    }
    }

    for(i = 0; i < numbers.length ; i++){ number=numbers[i]; if(number> 90){
        continue;
        }
        console.log(number);
        }