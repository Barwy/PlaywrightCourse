//Conditional statement if 

let hour = 24;
if(hour >= 6 && hour <= 12) {
    console.log('Good Morning!');
} else if (hour > 12 && hour <= 18) {
console.log('Good Afternoon!');
} else if ((hour > 18 && hour <= 24) || (hour >= 0 && hour < 6)) {
    console.log('Good Evening!');
} else {
    console.log('There is no such hour!');
}

//Rework code from the previous lesson into conditional statment
let age = 14
let hasLibratyCard = true;
let hasParentPermission = false;
let canBorrowBooksForYoungAdults = (age >= 14 || hasParentPermission) && hasLibratyCard;
console.log('This reader can borrow YA books: ' + canBorrowBooksForYoungAdults);

if ((age >= 14 || hasParentPermission) && hasLibratyCard ) {
    console.log('This reader can borrow YA books.');
} else {
    console.log('This reader cannot borrow YA books');
}