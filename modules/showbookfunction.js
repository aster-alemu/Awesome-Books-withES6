/* eslint-disable no-unused-vars */

const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const loggedBooks = document.querySelector('.logged-books');
let books = [];
let showBook = (() => {
  loggedBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    loggedBooks.innerHTML += `
        <div class="card">
            <p class="title">${books[i].title} by ${books[i].author}</p>
            <button class="deleteBtn" onclick="removeBook({$i}">Remove</button>
        </div> 
   `;

    // Reset the values to null to allow the user to input again
    title.value = '';
    author.value = '';
  }
});

let removeBook = (index) => {

  books.splice(index, 1);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
};
export {books, showBook,removeBook};
export {title, author, loggedBooks};
