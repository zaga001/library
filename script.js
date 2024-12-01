const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const heading = document.querySelector('#heading');
const tr = document.createElement('tr');
const td = document.createElement('td');

function displayBook(array) {
    array.forEach(element => {

    });
}

addBookToLibrary('Dune', 'Frank Herbert', 100, true);
displayBook(myLibrary);