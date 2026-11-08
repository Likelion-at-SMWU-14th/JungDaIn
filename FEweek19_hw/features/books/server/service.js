import { books } from "./data";

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((book) => book.id === id);
}

export function addBook(title, author) {
  const book = { id: Date.now(), title, author, done: false };
  books.push(book);
  return book;
}

export function toggleBook(id) {
  const book = getBook(id);
  if (!book) return null;

  book.done = !book.done;
  return book;
}

export function removeBook(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;

  const [removedBook] = books.splice(index, 1);
  return removedBook;
}