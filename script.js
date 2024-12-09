const myLibrary = [{
    title: "1984",
    author: "George Orwell",
    pages: '328',
    read: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: '281',
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

const table = document.querySelector('tbody');

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

const openBtn = document.querySelector('#open-modal');
const dialog = document.querySelector('#dialog');
const closeBtn = document.querySelector('#close-modal');
const submit = document.querySelector('#submit');

openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value === 'true';
    addBookToLibrary(title, author, pages, read);
    table.innerHTML = '';
    displayBook(myLibrary);
    const form = document.querySelector('form');
    form.reset();
    dialog.close();
});