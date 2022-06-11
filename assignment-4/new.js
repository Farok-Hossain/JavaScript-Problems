function perfectFriend(names) {
if(typeof (names) !='object' ){ return 'please input a array' ; }

for (var i = 0; i < names.length; i++) { if (names[i].length==5) { return names[i]; } } } var
    name=perfectFriend(['farok', 'gourob' , 'sagor' , 'tanimul' ]); console.log(name);