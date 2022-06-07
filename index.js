/* eslint-disable no-unused-vars */
// Select the Links to the pages

import {
  title, author, loggedBooks, books, showBook
} from './modules/showbookfunction.js';

const bookLink = document.querySelector('nav ul li .book-link');
const formLink = document.querySelector('nav ul li .form-link');
const contactLink = document.querySelector('nav ul li .contact-link');
const addButton = document.querySelector('.add-book');
const contact = document.querySelector('.contact');
const form = document.querySelector('form');
const currentDate = document.querySelector('.date');
const pageHeading = document.querySelector('.main-heading');

// import { author } from './modules/showbookfunction.js';
// import { loggedBooks } from './modules/showbookfunction.js';
// import { books } from './modules/showbookfunction.js';
// import { showBook } from './modules/showbookfunction.js';

window.onload = () => {
  if (localStorage.getItem('books')) {
    const books = JSON.parse(localStorage.getItem('books'));
  }
  contact.classList.add('hide');
  loggedBooks.classList.add('hide');

  showBook();
};
addButton.addEventListener('click', () => {
  const book = {
    title: title.value,
    author: author.value,
  };
  books.push(book);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
});
const today = new Date().toLocaleDateString('en-us', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

currentDate.innerHTML = `
  <p>${today}</p>
`;
// Add Event listeners for one page website
formLink.addEventListener('click', () => {
  loggedBooks.style.display = 'none';
  form.style.display = 'grid';
  contact.style.display = 'none';
  pageHeading.innerHTML = 'Add book';
});
bookLink.addEventListener('click', () => {
  loggedBooks.style.display = 'none';
  form.style.display = 'none';
  loggedBooks.style.display = 'block';
  pageHeading.innerHTML = 'Display all books';
});
contactLink.addEventListener('click', () => {
  contact.style.display = 'grid';
  form.style.display = 'none';
  loggedBooks.style.display = 'none';
  pageHeading.innerHTML = 'Contact Information';
});
