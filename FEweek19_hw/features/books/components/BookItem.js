"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./BookItem.module.css";

export default function BookItem({ book }) {
  const router = useRouter();

  async function handleToggle() {
    const response = await fetch(`/api/books/${book.id}`, { method: "PATCH" });
    if (!response.ok) return;
    router.refresh();
  }

  async function handleRemove() {
    const response = await fetch(`/api/books/${book.id}`, { method: "DELETE" });
    if (!response.ok) return;
    router.refresh();
  }

  return (
    <li className={styles.item}>
      <input type="checkbox" checked={book.done} onChange={handleToggle} />
      <Link
        href={`/books/${book.id}`}
        className={book.done ? `${styles.title} ${styles.done}` : styles.title}
      >
        {book.title}
      </Link>
      <button type="button" className={styles.remove} onClick={handleRemove}>
        삭제
      </button>
    </li>
  );
}