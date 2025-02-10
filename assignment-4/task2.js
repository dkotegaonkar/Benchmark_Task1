const bookLibrary = {
    books: [{ title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
            { title: "1984", author: "George Orwell", yearPublished: 1949 },
            { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 },
            { title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951 },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 },
            { title: "Moby-Dick", author: "Herman Melville", yearPublished: 1851 },
            { title: "The Name of the Wind", author: "Patrick Rothfuss", yearPublished: 2007 },
            { title: "Dune", author: "Frank Herbert", yearPublished: 1965 },
            ],
    
    addBook(title,author,yearPublished){
        this.books.push({title,author,yearPublished});
    },

    getBooksByAuthor(authorName){
        return this.books.filter(book => book.author === authorName)
    },

    removeBook(title){
        return this.books.filter(book => book.title !== title)
    },

    getAllBooks(){
        return this.books.map(book => book.title);
    }
};

console.log(bookLibrary.getAllBooks());
console.log(bookLibrary.removeBook('Dune'));
console.log(bookLibrary.getBooksByAuthor('Herman Melville'));
bookLibrary.addBook('a', 'b', 2003);
console.log(bookLibrary.getAllBooks());
console.log(bookLibrary.books);

