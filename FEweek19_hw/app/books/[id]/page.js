import { headers } from "next/headers";
import styles from "./page.module.css";

export default async function BookDetailPage({ params }) {
  const { id } = await params;

  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const response = await fetch(`http://${host}/api/books/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("책 정보를 불러오지 못했어요.");

  const book = await response.json();

  return (
    <article className={styles.card}>
      <span className={book.done ? `${styles.badge} ${styles.doneBadge}` : styles.badge}>
        {book.done ? "완독" : "읽는 중"}
      </span>
      <h1 className={styles.title}>{book.title}</h1>
      <p>작가: {book.author}</p>
    </article>
  );
}