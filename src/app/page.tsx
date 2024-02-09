import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          &nbsp;
          <code className={styles.code}>Тестовое задание от Даниила Чистякова</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            1 задание <span>-&gt;</span>
          </h2>
          <p>Расположено в папке utils</p>
        </a>

        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            2 задание <span>-&gt;</span>
          </h2>
          <p>Результат в хедере</p>
        </a>

        <Link
          href="/games/ezugi/blackjack-1"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            3 задание <span>-&gt;</span>
          </h2>
          <p>Страница игры</p>
        </Link>
      </div>
    </main>
  );
}
