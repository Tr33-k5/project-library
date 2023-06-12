let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title,
      this.author = author,
      this.pages = pages,
      this.read = read,
      this.info = () => title + ' by ' + author + ', ' + pages + ' pages, ' + read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
myLibrary.push(theHobbit);
