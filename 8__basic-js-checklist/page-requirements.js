function pageRequirements(book1, book2, book3){
const firstBookPages = 100;
const secondBookPages = 200;
const thirdBookPages = 300;

const totalPages = (firstBookPages * book1) + (secondBookPages * book2) + (thirdBookPages * book3);
return totalPages;
}

const result = pageRequirements(12, 15, 25);
console.log(result);