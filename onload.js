window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
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