import Link from "next/link";
import Layout from "../../components/layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        バックエンドエンジニアとして働いています。
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyle.boldText}>
                SSGとSSRの違いはなんでしょうか？
              </div>
            </Link>
            <br />
            <small className={utilStyle.lightText}>March 3 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyle.boldText}>
                SSGとSSRの違いはなんでしょうか？
              </div>
            </Link>
            <br />
            <small className={utilStyle.lightText}>March 3 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <div className={utilStyle.boldText}>
                SSGとSSRの違いはなんでしょうか？
              </div>
            </Link>
            <br />
            <small className={utilStyle.lightText}>March 3 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
