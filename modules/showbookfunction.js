/* eslint-disable no-unused-vars */

const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const loggedBooks = document.querySelector('.logged-books');
const books = [];
const showBook = (() => {
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

const removeBook = (index) => {

  books.splice(index, 1);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
};
export { title, author, loggedBooks };
export { books, showBook };
