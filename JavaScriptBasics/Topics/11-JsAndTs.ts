//After assigning a value to a variable, it is assigned a type by TS.
let fruitOne = 'banana';
let colorOne = 'yellow';
let princeOne = 30;

//Assigning a value of a different type than the original one results in red underline.
//fruitOne = 35; 
//console.log(fruitOne);

//We can explicitly type what type a variable should be
let fruitTwo: string = 'pear';
let colorTwo: string = 'golden';
let priceTwo: number = 28;

//We can create our own custom types
type Fruit = {fruitName: string, fruitcolor: string, fruitPrice: number, isAvailable: boolean}

//When we create a variable of the type Fruit, the values we can assign it must match those present in Fruit type.
//This will not work: let peach: Fruit = true;

let cherry: Fruit = {
fruitName: 'Cherry',
fruitcolor: 'Red',
fruitPrice: 30,
isAvailable: true
}

console.log(cherry.fruitName);