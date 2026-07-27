let itemText = 'regular: This chair costs 30 Euros.';
console.log(itemText);

let productPrice = 30;
let productName = 'chair';

//Concatination lets us break a string into multiple chunks and put them together.
let itemTextConcat = 'concatinated: This ' + productName + ' costs ' + productPrice + ' Euros.';
console.log(itemTextConcat);

//Interpolation is done by enclosing text in `` and makes formatting easier.
let itemTextInterpolated = `interpolated: This ${productName} costs ${productPrice} Euros.`;
console.log(itemTextInterpolated);