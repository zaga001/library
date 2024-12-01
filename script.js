const myLibrary = [{
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: false
  }];

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

const table = document.querySelector('table');

function displayBook(array) {
    array.forEach(object => {
        const template = `
            <tr>
                <td>${object.title}</td>
                <td>${object.author}</td>
                <td>${object.pages}</td>
                <td>${object.read}</td>
            </tr>`;
        table.innerHTML += template;
    });
}

displayBook(myLibrary);