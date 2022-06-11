function perfectFriend(names) {

if(typeof (names) !='object' ){
return 'please enter a string' ; }
for (var i = 0; i < names.length; i++) { if (names[i].length==5) { return names[i]; } } } var
    fiveCharName=perfectFriend(['Pori Moni', 'Rafsun' , 'Faruk' , 'Yousuf' , 'farok' , 'gourob' , 'sagor' , 'tanimul'
    ]); console.log(fiveCharName);