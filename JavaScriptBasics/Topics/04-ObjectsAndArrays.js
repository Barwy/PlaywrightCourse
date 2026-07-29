//Objects can hold multiple values at once (key-value paired).
let customer = {
name: 'Jane',
surname: 'Doe' //last value does not have a , at the end.
}

//Printing one of values - there are 2 ways:
console.log(customer.name);
console.log(customer['surname']);

//We can reassign value inside an object
customer.name = 'George';
customer['surname'] = 'Montana';
console.log(customer.name);
console.log(customer.surname);
console.log(`${customer.name} ${customer.surname}`);

//Array is a list of items, each is assigned an index number starting from 0.
let fruits = ['banana', 'apple', 'pear'];
console.log(fruits[1]);

fruits[1] = 'peach';
console.log(fruits[1]);

//Objects can contain arrays
let person = {
    name: 'Adam',
    surname: 'Smiles',
    favouriteColors: ['black', 'blue']
}

console.log(person.favouriteColors[1]);