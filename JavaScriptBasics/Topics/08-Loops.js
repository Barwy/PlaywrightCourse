//We use loops to repeat an operation multiple times.

//no loop
console.log('Hello world, no loop');
console.log('Hello world, no loop');
console.log('Hello world, no loop');
console.log('Hello world, no loop');

//for(statement 1; statement 2; statement 3)
//1 - what we want to start the loop with;
//2 - running condition for the loop (run intil);
//3 - what should haoppen after each loop cycle;

for(let i = 0; i < 4; i++) {
console.log('Hellow World!');
}

for(let i = 0; i < 5; i++){
    if (i%2 == 0) {
        console.log(i+': Hi Amanda');
    } else if (i%2 == 1) {
        console.log(i+ ': Hi Ben');
    }
}

//for of... loop
//for(iterator of listName)
//iterator can have any name - it is a variable holding item from the list.
//listName must be the name ofthe list we are iterating through.

let fruits = ['apple','banaa','cherry','dewberry','elderberry'];

for (item of fruits) {
    console.log(item);
    if (item == 'cherry') {
        break;
    }
}

//for each loop that works similarly to the for loop.
fruits.forEach(item => {
    console.log(item + ' new.');
});