let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title,
      this.author = author,
      this.pages = pages,
      this.read = read,
      this.info = () => title + ' by ' + author + ', ' + pages + ' pages, ' + read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
myLibrary.push(theHobbit);

const lesMiserables = new Book('Les Misérables', 'Victor Hugo', 295, true);
myLibrary.push(lesMiserables);

const books = document.getElementById('bookshelf');

myLibrary.forEach(book => {
   let index = myLibrary.indexOf(book);
   let newBook = document.createElement('div');
   newBook.classList.add('book');
   newBook.setAttribute('id', 'book' + index);

   let bookTitle = document.createElement('h2');
   bookTitle.classList.add('book-title');
   bookTitle.textContent = book.title;
   newBook.appendChild(bookTitle);

   let bookAuthor = document.createElement('p');
   bookAuthor.classList.add('book-author');
   bookAuthor.textContent = book.author;
   newBook.appendChild(bookAuthor);

   let bookPages = document.createElement('p');
   bookPages.classList.add('book-pages');
   bookPages.textContent = book.pages;
   newBook.appendChild(bookPages);

   let switchContainer = document.createElement('div');
   switchContainer.classList.add('switch-container');
   newBook.appendChild(switchContainer);

   let read = document.createElement('p');
   read.textContent = 'Read :';
   switchContainer.appendChild(read);
   let labelSwitch = document.createElement('label');
   labelSwitch.classList.add('switch');
   switchContainer.appendChild(labelSwitch);

   let input = document.createElement('input');
   input.setAttribute('type', 'checkbox');
   input.setAttribute('id', 'cb' + index);
   input.checked = book.read;
   labelSwitch.appendChild(input);
   let span = document.createElement('span');
   span.classList.add('slider', 'round');
   labelSwitch.appendChild(span);

   let removebtn = document.createElement('input');
   removebtn.setAttribute('type', 'submit');
   removebtn.setAttribute('value', 'X');
   removebtn.classList.add('remove-btn', 'button');
   removebtn.setAttribute('id', 'rmvBtn' + index);
   switchContainer.appendChild(removebtn);

   books.appendChild(newBook);

   removebtn.addEventListener('click', () => {
      console.log(myLibrary.toString);

      myLibrary.splice(index, 1);
      newBook.remove();

      console.log(myLibrary.toString);
   })
});
