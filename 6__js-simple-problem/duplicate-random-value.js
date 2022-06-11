const selected = []
for (let i = 0; i < 10; i++){
     const random=Math.random()*100; 
     const picked=Math.round(random);
    if(selected.indexOf(picked)==-1){ 
        seclected.push(picked); 
    } 
    else{ 
        console.log('duplicate',selected, picked)
     }
     }
    console.log(selected);