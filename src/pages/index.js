import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "../../lib/post";
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
  // mdファイルのデータを取得
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        フルスタックエンジニアとして働いています。
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>📝エンジニアブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map((data) => (
            <article key={data.id}>
              <Link href={`/posts/${data.id}`}>
                <img
                  src={`${data.thumbnail}`}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${data.id}`}>
                <div className={utilStyle.boldText}>{data.title}</div>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{data.date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
