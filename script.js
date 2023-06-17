const bookshelfDOM = document.getElementById('bookshelf');
const bookshelfArray = [];
const addButton = document.getElementById('addButton');

function Book(title, author, pages, read) {
   this.title = title,
      this.author = author,
      this.pages = pages,
      this.read = read
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
const lesMiserables = new Book('Les Misérables', 'Victor Hugo', 295, true);

bookshelfArray.push(theHobbit);
bookshelfArray.push(lesMiserables);

const createNewBook = (book) => {
   let index = bookshelfArray.indexOf(book);
   let bookCard = document.createElement('div');
   bookCard.classList.add('book');
   bookCard.setAttribute('id', 'book' + (index + 1));

   let bookTitle = document.createElement('h2');
   bookTitle.classList.add('book-title');
   bookTitle.textContent = book.title;
   bookCard.appendChild(bookTitle);

   let bookAuthor = document.createElement('p');
   bookAuthor.classList.add('book-author');
   bookAuthor.textContent = book.author;
   bookCard.appendChild(bookAuthor);

   let bookPages = document.createElement('p');
   bookPages.classList.add('book-pages');
   bookPages.textContent = book.pages;
   bookCard.appendChild(bookPages);

   let switchContainer = document.createElement('div');
   switchContainer.classList.add('switch-container');
   bookCard.appendChild(switchContainer);

   let read = document.createElement('p');
   read.textContent = 'Have you read it ?';
   switchContainer.appendChild(read);
   let labelSwitch = document.createElement('label');
   labelSwitch.classList.add('switch');
   switchContainer.appendChild(labelSwitch);

   let input = document.createElement('input');
   input.setAttribute('type', 'checkbox');
   input.checked = book.read;
   labelSwitch.appendChild(input);
   let span = document.createElement('span');
   span.classList.add('slider', 'round');
   labelSwitch.appendChild(span);

   let removebtn = document.createElement('input');
   removebtn.setAttribute('type', 'submit');
   removebtn.setAttribute('value', 'X');
   removebtn.classList.add('remove-btn', 'button');
   removebtn.setAttribute('id', 'removeButton' + (index + 1));
   bookCard.appendChild(removebtn);

   // Event Listener for remove-button
   removebtn.addEventListener('click', (e) => {
      bookshelfArray.splice(index, 1);
      bookCard.remove();
      e.preventDefault();
   });

   // Event Listener for read-checkbox
   input.addEventListener('change', () => {
      bookshelfArray[index].read = input.checked;
   });

   return bookCard;
}

const displayForm = () => {
   let formSection = document.createElement('div');
   document.querySelector('body').appendChild(formSection);
   formSection.classList.add('form-section');
   let form = document.createElement('form');
   formSection.appendChild(form);

   let formTitle = document.createElement('h3');
   formTitle.classList.add('form-title');
   formTitle.textContent = 'Add new book';
   form.appendChild(formTitle);

   let inputContainer = document.createElement('div');
   inputContainer.classList.add('input-container');
   form.appendChild(inputContainer);

   let inputTxtBookTitle = document.createElement('input');
   inputTxtBookTitle.setAttribute('type', 'text');
   inputTxtBookTitle.setAttribute('name', 'inputTextBookTitle');
   inputTxtBookTitle.setAttribute('placeholder', 'Title');
   inputTxtBookTitle.setAttribute('required', 'true');
   inputTxtBookTitle.classList.add('form-input');
   inputContainer.appendChild(inputTxtBookTitle);

   let inputTxtBookAuthor = document.createElement('input');
   inputTxtBookAuthor.setAttribute('type', 'text');
   inputTxtBookAuthor.setAttribute('name', 'inputTextBookAuthor');
   inputTxtBookAuthor.setAttribute('placeholder', 'Author');
   inputTxtBookAuthor.setAttribute('required', 'true');
   inputTxtBookAuthor.classList.add('form-input');
   inputContainer.appendChild(inputTxtBookAuthor);

   let inputNbBookPages = document.createElement('input');
   inputNbBookPages.setAttribute('type', 'number');
   inputNbBookPages.setAttribute('name', 'inputNumberBookPages');
   inputNbBookPages.setAttribute('placeholder', 'Pages');
   inputNbBookPages.setAttribute('required', 'true');
   inputNbBookPages.classList.add('form-input', 'input-number');
   inputContainer.appendChild(inputNbBookPages);

   //toggle switch
   let switchContainer = document.createElement('div');
   switchContainer.classList.add('form-switch-container');
   inputContainer.appendChild(switchContainer);

   let read = document.createElement('p');
   read.textContent = 'Have you read it ?';
   read.classList.add('form-read');
   switchContainer.appendChild(read);
   let labelSwitch = document.createElement('label');
   labelSwitch.classList.add('switch');
   switchContainer.appendChild(labelSwitch);

   let input = document.createElement('input');
   input.setAttribute('type', 'checkbox');
   labelSwitch.appendChild(input);
   let span = document.createElement('span');
   span.classList.add('slider', 'round');
   labelSwitch.appendChild(span);

   //submit button
   let submitBtn = document.createElement('input');
   submitBtn.setAttribute('type', 'submit');
   submitBtn.setAttribute('value', 'Submit');
   submitBtn.classList.add('submit-btn', 'button');
   form.appendChild(submitBtn);

   let closeFormBtn = document.createElement('input');
   closeFormBtn.setAttribute('type', 'button');
   closeFormBtn.setAttribute('value', 'X');
   closeFormBtn.classList.add('close-form-btn', 'disable');
   form.appendChild(closeFormBtn);

   closeFormBtn.addEventListener('click', () => {
      formSection.remove();
   });

   submitBtn.addEventListener('click', () => {
      let title = inputTxtBookTitle.value;
      let author = inputTxtBookAuthor.value;
      let pages = inputNbBookPages.value;
      let readCheckbox = input.checked;
      bookshelfArray.push(new Book(title, author, pages, readCheckbox));

      bookshelfDOM.innerHTML = '';
      bookshelfArray.forEach(bookObject => {
         let newBook = createNewBook(bookObject);
         bookshelfDOM.appendChild(newBook);
      });
      formSection.remove();
   });
}

bookshelfArray.forEach(bookObject => {
   let newBook = createNewBook(bookObject);
   bookshelfDOM.appendChild(newBook);
});

addButton.addEventListener('click', displayForm);
