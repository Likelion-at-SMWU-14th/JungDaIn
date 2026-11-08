import BookItem from "./BookItem";
import styles from "./BookList.module.css";

export default function BookList({ books }) {
  if (books.length === 0) {
    return <p className={styles.empty}>아직 등록한 책이 없어요!</p>;
  }

  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}