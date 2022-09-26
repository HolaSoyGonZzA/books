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
  updateYear(year) {
    this.year = year;
  }
}

console.log(BOOKS);

const b1 = new Book("La Novia Gitana", "Carmen Mola", 2015);

BOOKS.push(b1);

const b2 = new Book("La Red Púrpura", "Carmen Mola", 2019);

BOOKS.push(b2);

console.log(BOOKS);

BOOKS.shift();

console.log(BOOKS);

BOOKS.unshift(new Book("jajax", "ajax", 2022));
