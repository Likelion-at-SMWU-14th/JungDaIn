"use client";

import styles from "./page.module.css";

export default function ErrorPage({ reset }) {
  return (
    <div className={styles.message}>
      <p>책 정보를 불러오지 못했어요</p>
      <button type="button" className={styles.retry} onClick={() => reset()}>
        다시 시도
      </button>
    </div>
  );
}