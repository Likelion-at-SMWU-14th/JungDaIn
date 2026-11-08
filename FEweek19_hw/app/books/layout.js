import Link from "next/link";
import styles from "./layout.module.css";

export default function BooksLayout({ children }) {
  return (
    <section>
      <Link href="/" className={styles.back}>
        ← 목록으로
      </Link>
      {children}
    </section>
  );
}