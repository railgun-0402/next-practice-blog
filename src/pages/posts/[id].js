import Head from "next/head";
import Layout from "../../../components/layout";
import { getAllPostsIds, getPostData } from "../../../lib/post";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false, // pathsに含まれない場合は404
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>

        {/* 危険性のある情報が入る場合があるので注意！ サニタイズなどが本来は必要 */}
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
