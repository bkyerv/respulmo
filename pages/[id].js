import { getAllPostIds, getPostData } from "../lib/posts";
import Post from "../components/Post";

export default function Postz({ postData }) {
  return <Post title={postData.title} content={postData.content} />;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
