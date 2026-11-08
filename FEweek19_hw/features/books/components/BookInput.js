"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BookInput.module.css";

export default function BookInput() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) return;

    const response = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });

    if (!response.ok) return;

    setTitle("");
    setAuthor("");
    router.refresh();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="책 제목을 입력하세요"
      />
      <input
        className={styles.input}
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        placeholder="작가 (선택)"
      />
      <button type="submit" className={styles.button}>
        추가
      </button>
    </form>
  );
}