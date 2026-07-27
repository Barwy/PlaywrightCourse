let name = 'John';
let surname = 'Doe';

console.log(surname);

//we can declare multiple variables at the same time and then use them.
let age, sex, dateOfBirth;
age = 19;
console.log(age);

//Variables can be overridden
age = 44;
console.log(age);

//Another type of variable is constant - const. Their values cannot be changed (TypeError: Assignment to constant variable.).
const car = 'Ford';
console.log(car);
//car = 'Opel';
//We also cannot create or multiple empty constants at once (SyntaxError: Missing initializer in const declaration). They must be initialized (have assigned value).
//const dogName; 
//const address, job, favouriteFood;

//JavaScript uses 5 primitive data types
let nickName = 'Deer'; //string - text in quotes
let siblings = 3; //number - digits without quotes
let isEmployed = true; //boolean - takes one of 2 values: true or false
let yearsUnemployed = null; //no value (we expect a variable to not have a value)
let bicycles = undefined; //present in errors, something doest not exist.