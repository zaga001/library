class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

const myLibrary = [
    new Book("Omniscient Reader's Viewpoint", "Sing Shong", 551, true),
    new Book("Lord of the Mysteries", "Cuttlefish That Loves Diving", 1430, true)
];

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const table = document.querySelector('tbody');

function displayBook(array) {
    table.innerHTML = '';
    array.forEach((object, index) => {
        const template = `
            <tr data-index="${index}">
                <td>${object.title}</td>
                <td>${object.author}</td>
                <td>${object.pages}</td>
                <td>${object.read}</td>
                <td>
                    <button class="toggle-read-btn" data-index="${index}">
                        Toggle Read
                    </button>
                </td>
                <td>
                    <button class="remove-btn" data-index="${index}">
                        Remove
                    </button>
                </td>
            </tr>`;
        table.innerHTML += template;
    });
    
    addRemoveEventListeners();
    addToggleReadEventListeners();
}

function addRemoveEventListeners() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.removeEventListener('click', removeButtonClickHandler);
        button.addEventListener('click', removeButtonClickHandler);
    });
}

function addToggleReadEventListeners() {
    const toggleReadButtons = document.querySelectorAll('.toggle-read-btn');
    toggleReadButtons.forEach(button => {
        button.removeEventListener('click', toggleReadButtonClickHandler);
        button.addEventListener('click', toggleReadButtonClickHandler);
    });
}

function removeButtonClickHandler(event) {
    const index = event.target.getAttribute('data-index');
    removeBookFromLibrary(index);
}

function toggleReadButtonClickHandler(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary[index].toggleReadStatus();
    displayBook(myLibrary);
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBook(myLibrary);
}

const openBtn = document.querySelector('#open-modal');
const dialog = document.querySelector('#dialog');
const closeBtn = document.querySelector('#close-modal');
const submit = document.querySelector('#submit');

displayBook(myLibrary);

openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());

submit.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value === 'true';
    addBookToLibrary(title, author, pages, read);
    displayBook(myLibrary);
    const form = document.querySelector('form');
    form.reset();
    dialog.close();
});