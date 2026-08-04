//Classes and methods are a way to organize a reusable code.
//To have a class available for use, we need to import it
import { BookDescription } from '../Functions/10-Classes.js';

//Then we need to create an instance of it
let bookDescription = new BookDescription();

//We use a method from a class in the following way:
bookDescription.printBookTitle('Winnie the Pooh');
bookDescription.printAuthor('A. A. Milne');

//We import the instance of MovieDescription class and use its name.
//This makes the code look cleaner.
import { movieDescription } from '../Functions/10-Classes.js';
movieDescription.printMovieTitle('Lord of the Rings');
movieDescription.printDirector('Peter Jackson');