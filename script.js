let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function remove(index) {
  myLibrary.splice(index, 1);
  render();
}
function addBookToLibrary() {
  let title = document.querySelector("#book-title").value;
  let author = document.querySelector("#book-author").value;
  let pages = document.querySelector("#book-pages").value;
  let read = document.querySelector("#read-book").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
  myLibrary.push(newBook);
  render();
}

document
  .querySelector("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryBook = document.querySelector(".book-cards");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `<div class = "card">
     <h3 class = "title"> Title: ${book.title}</h3>
     <h5 class = "author"> Author: ${book.author}</h5>
     </div>
     <div class = "card card-body">
     <p> Number of Pages: ${book.pages}</p>
     <p class = "card read-status"> Book Status: ${
       book.read ? "Read" : "Not Read Yet"
     }</p>
       <button class ="remove-button" onclick =" remove(${i})"> Remove Book </button>
       <button class ="toogle-read-btn" onclick =" toggleRead(${i})"> Toggle Read </button>
     </div>`;
    libraryBook.appendChild(bookElement);
  }
}
