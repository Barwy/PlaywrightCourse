//Functions let us reuse the code.

//Declaring a declarative function (it has a name). It can be calledy anywhere in a file.
function printAlpha(){
    console.log('Alpha');
}

//Calling a function:
printAlpha();

//Declaring an anymous function(nameless one). To do this, it has to be assigned to variable.
//It can be called only after it has been declared.
let bravo = function() {
    console.log('Bravo');
}

bravo();

//Arrow function
let charlie = () => {console.log('Charlie');}
charlie();

//We can pass arguments to functions.
function printDelta(letter) {
    console.log(letter);
}

printDelta('Delta');
printDelta('Echo');

//Arguments can be added by separating them with a comm.
let foxtrot = (letter1, letter2) => {
    console.log(`${letter1} and ${letter2}`);
}

foxtrot('Foxtrot','Golf');

//Functions can return results of operations they perform
function returnHotel() {
    let hotel = 'Hotel';
    return  hotel;
}

console.log(returnHotel());

//Importing a single function:
//import { functionName } from 'pathToTheFile'
//To make it work we need to add "type": module to package.json file.
//We also need to added a keyword export before the name of the function we are exporting.
import { printLetter2 } from '../Topics/Functions/09-FunctionsB.js'
printLetter2('India');

//Importing contents of a whole file:
import * as Functions from '../Topics/Functions/09-FunctionsB.js'

//We use it by calling the name after as .functionName.
Functions.printLetter2('Juliett');