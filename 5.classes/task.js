// Задание 1. Базовый класс и конструктор //
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    // Метод увеличивающий в полтора раза. //
    fix() {
      this.state *= 1.5;
    }
    // Контролирование состояние книг. Записать в свойство state. //
    set state(newCondtion) {
      if (newCondtion < 0) {
        this._state = 0;
      }
      if (newCondtion > 100) {
        this._state = 100;
      } else {
        this._state = newCondtion;
      }
    }
    // Читать значение свойства state. //
    get state() {
      return this._state;
    }
  }
  // Класс Magazine, который будет наследоваться от класса PrintEditionItem. //
  class Magazine extends PrintEditionItem {
    constructor(type, name, releaseDate, pagesCount) {
      super(type, name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  // Класс Book, который наследуется от класса PrintEditionItem. //
  class Book extends PrintEditionItem {
    constructor(author, type, releaseDate, pagesCount) {
      super(type, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  // Класс который наследуются от класса Book для романов. //
  class NovelBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
      super(author, type, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  // Класс который наследуются от класса Book для фантастики. //
  class FantasticBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
      super(author, type, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  // Класс который наследуются от класса Book для детективов. //
  class DetectiveBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
      super(author, type, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

// Задание 2. Библиотека в цифровом режиме. //
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    /* Метод добавления книги в хранилище books,
  если состояние книги больше 30. */
    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
    }
    // Поиск книги по свойству или возврат null если не найдена //
    findBookBy(type, value) {
        let findBook = this.books.find((book) => book[type] === value);
        if (typeof findBook === "object") {
            return findBook;
        } else {
            return null;
        }
    }
    // Поиск книги по названию или возврат null если не найдена //
    giveBookByName(bookName) {
        let giveBoook = this.books.find((book) => book.name === bookName);
        if (typeof giveBoook === "object") {
            let index = this.books.indexOf(giveBoook);
            this.books.splice(index, 1);
            return giveBoook;
        } else {
            return null;
        }
    }
}