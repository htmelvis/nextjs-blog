// [id].js determines a dynamic route in nextjs
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post() {
  return <Layout></Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id

  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
