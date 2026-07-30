//&& - AND - both values must be correct for expression to be true
let a = 2;
let b = 3;
let c = 4;
let d = 5;
//&& - AND - both values must be correct for expression to be true
console.log('AND operator: ' + (a < b && c < d));

//|| - OR - either value must be correct for expression to be true
console.log('OR operator: ' + (a > b || c < d));

let age = 14
let hasLibratyCard = true;
let hasParentPermission = false;
let canBorrowBooksForYoungAdults = (age >= 14 || hasParentPermission) && hasLibratyCard;
console.log('This reader can borrow YA books: ' + canBorrowBooksForYoungAdults);

//! - NOT - means that something is not or is false.
console.log('NOT operator: ' + !hasLibratyCard);
console.log(4 !== 5);

//My experiment with constructors.
class Reader{
    constructor(name, age, hasLibraryCard, hasParentPermission) {
        this.name = name;
        this.age = age;
        this.hasLibratyCard = hasLibraryCard;
        this.hasParentPermission = hasParentPermission;
    }
canBorrowYABooks() {
let canBorrowBooksForYoungAdults = (this.age >= 14 || this.hasParentPermission) && this.hasLibratyCard;
return `${this.name} can borrow YA books: ` + canBorrowBooksForYoungAdults;
}
}

const amanda = new Reader("Amanda", 14, true, false);
const bob = new Reader("Bob", 7, true, false)
console.log(amanda.canBorrowYABooks());
console.log(bob.canBorrowYABooks());





