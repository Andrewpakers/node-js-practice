let myLibrary = [];

class Book {
  constructor (title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }

  info() {
    if (this.hasRead === true) {
      return `${this.title} by ${this.author} is ${this.pages} pages and has been read`;
    }
    return `${this.title} by ${this.author} is ${this.pages} pages and has not been read yet`;
  }
}

function sortLibrary() {
  myLibrary.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

function addBookToLibrary(...books) {
  for (let i = 0; i < books.length; i += 1) {
    myLibrary.push(books[i]);
  }
  sortLibrary();
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function displayBooks() {
  const table = document.querySelector(".bookTable");

  removeElementsByClass("added-book");

  for (let i = 0; i < myLibrary.length; i += 1) {
    const newBook = document.createElement("tr");
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newPages = document.createElement("td");
    const newRead = document.createElement("td");

    newTitle.textContent = myLibrary[i].title;
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = myLibrary[i].pages;
    if (myLibrary[i].hasRead === true) {
      newRead.textContent = "yes";
    } else {
      newRead.textContent = "no";
    }

    newRead.dataset.array = i;

    // eslint-disable-next-line no-use-before-define
    newRead.addEventListener("click", changHasRead, false);

    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newRead);

    const deleteButton = document.createElement("button");
    const buttonCell = document.createElement("td");
    deleteButton.dataset.array = i;
    // eslint-disable-next-line no-use-before-define
    deleteButton.addEventListener("click", deleteBook, false);
    deleteButton.textContent = "Delete Book";
    buttonCell.appendChild(deleteButton);
    newBook.appendChild(buttonCell);

    newBook.classList.add("added-book");

    table.appendChild(newBook);
  }
}

function changHasRead() {
  const position = Number(this.dataset.array);
  if (this.textContent === "yes") {
    this.textContent = "no";
    myLibrary[position].hasRead = false;
  } else {
    this.textContent = "yes";
    myLibrary[position].hasRead = true;
  }
}

function deleteBook() {
  const arrayPosition = Number(this.dataset.array);
  const newArray = [];

  for (let i = 0; i < myLibrary.length; i += 1) {
    if (!(i === arrayPosition)) {
      newArray.push(myLibrary[i]);
    }
  }
  myLibrary = newArray;
  sortLibrary();
  displayBooks();
}

function submitBook(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const checkBox = document.getElementById("hasRead");
  let hasRead;
  if (checkBox.checked) {
    hasRead = true;
  } else {
    hasRead = false;
  }

  const newBook = new Book(title, author, pages, hasRead);
  addBookToLibrary(newBook);
  displayBooks();
}

function init() {
  const btn = document.getElementById("submitButton");
  btn.addEventListener("click", submitBook, false);
}

init();
