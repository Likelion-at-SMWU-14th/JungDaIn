import { headers } from "next/headers";
import BookInput from "@/features/books/components/BookInput";
import BookList from "@/features/books/components/BookList";
import styles from "./page.module.css";

export default async function Home() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const response = await fetch(`http://${host}/api/books`, {
    cache: "no-store",
  });
  const books = await response.json();
  const doneCount = books.filter((book) => book.done).length;

  return (
    <>
      <section className={styles.summary}>
        <h1>내 책장</h1>
        <p>
          {doneCount} / {books.length}권 완독
        </p>
      </section>

      <BookInput />
      <BookList books={books} />
    </>
  );
}