interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
}
const books: Book[] = [
    {id: 10, title: "Red fish, Blue fish, One fish, Two fish", author: "Dr. Seuss", published: new Date("1960-12-3"), available: true}, 
];
function addBook(Book: Book): void {books.push(Book)}

function findBookById(id: number): Book | undefined { return books.find(book => book.id === id)}

function updateBook(book: Book): boolean {
    let savedBook = books.findIndex(changedBook => book.id === changedBook.id);

    if(savedBook > -1) {
        books[savedBook] = book
        return true
    } else {
        return false
    }
};

function removeBook(id: number): boolean {
    let bookIndex = books.findIndex(changedBook => id === changedBook.id);
    if (books.splice(bookIndex, 1).length === 1) {
        return true
    } else {
        return false
    }
};

console.log(addBook({id: 12, title: "Fox in Socks", author: "Dr. Seuss", published: new Date("1965-12-3"), available: false}));
console.log(updateBook({id: 10, title: "Green Eggs and Ham",author: "Dr. Seuss", published: new Date("1960-10-8"), available: true }));
console.log(removeBook(12));
console.log(findBookById(10));