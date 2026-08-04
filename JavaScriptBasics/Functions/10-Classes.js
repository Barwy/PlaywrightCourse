//We create a class with methods and export it to use it in another file.
export class BookDescription {
    printBookTitle(bookTitle) {
        console.log(bookTitle);
    }

    printAuthor(author) {
        console.log(author);
    }
}

//Instead of exporting the class, we can export its instance
class MovieDescription {
    printMovieTitle(title) {
        console.log(title);
    }
// Descriptions of methods can be added in the following way. 
// They are visible in files where they are used when we hover over method's name.
/**
 * This method prints the provided name of a movie's director.
 * @param {string} director 
 */
    printDirector(director) {
        console.log(director);
    }
}

export const movieDescription = new MovieDescription();