const $btnSubmit = document.getElementById("btnSubmit");
const $result = document.getElementById("result");
const $form = document.getElementById("form");
const $name = document.getElementById("name");
const $author = document.getElementById("author");
const $year = document.getElementById("year");

const BOOKS = [];

class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
  info() {
    return `${this.name} - ${this.author} ${this.year}`;
  }
}

$btnSubmit.addEventListener("click", addBook);

function addBook(event) {
  if (!$form.checkValidity()) {
    return $form.reportValidity();
  }

  event.preventDefault();

  const newBook = new Book($name.value, $author.value, $year.value);
  BOOKS.push(newBook);

  printBooks();
}

function printBooks() {
  $result.innerHTML = "";
  BOOKS.forEach((book) => {
    $result.innerHTML += `<li>${book.info()}</li>`;
  });
}
