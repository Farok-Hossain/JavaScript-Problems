const products =[
{name: 'samsung s3 phone', price: 12000},
{name: 'asus laptop', price: 32000},
{name: 'apple smart watch', price: 18000},
{name: 'paper', price: 80},
{name: 'lg phone', price: 10000},
{name: 'land phone', price: 100},
{name: 'samsung watch', price: 1000},
{name: 'dell laptop', price: 31000},
{name: 'lenovo laptop', price: 21000},
];


function searchProducts(products, searchText){
const matched = [];
for(const product of products){
const name = product.name;
if(name.indexOf(searchText) != -1){
matched.push(product);
}
}
return matched;
}

const matched = searchProducts(products, 'laptop');
console.log(matched);