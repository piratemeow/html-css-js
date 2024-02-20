// DOM navigation
// .firstElementChild means the first child under that element
// .lastElementChild means the last child under that element
// .nextElementSibling means the next sibling of that element
// .previousElementSibling means the previous sibling of that element
// .parentElement means the parent of that element
// .children means all the children of that element as html collection

const fruit = document.getElementById("fruit");

const firstElementChild = fruit.firstElementChild;

firstElementChild.style.backgroundColor= "red";

const lastchild = fruit.lastElementChild;

lastchild.style.backgroundColor="yellow";

const two = document.getElementById("three");

// const nextsibling = two.nextElementSibling;

// nextsibling.style.backgroundColor="green";

const previossibling = two.previousElementSibling;
previossibling.style.backgroundColor = "blue";
console.log(document.children);




