const phones =[
{name:'samsung s5', price:45000, camera: 10, storage: 32},
{name:'walton m32', price:15000, camera: 8, storage: 8},
{name:'xiaomi note 7', price:12000, camera: 48, storage: 64},
{name:'oppo a2', price:17000, camera: 8, storage: 32},
{name:'nokia h81', price:8000, camera: 8, storage: 4},
{name:'htc h81', price:25000, camera: 8, storage: 16}

];

let cheapest = phones[0];
for(const phone of phones){
<!-- compare price only -->
if (phone.price < cheapest.price){ cheapest=phone; } } console.log(cheapest);