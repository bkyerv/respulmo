import mdToHTML from "../../lib/mdToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import Post from "../../components/Post";

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((p) => {
      return {
        params: {
          slug: p.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await mdToHTML(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content: post.content,
      },
    },
  };
}

export default function BlogPost({ post }) {
  const { content } = post;
  return (
    <div>
      <Post content={content} />
    </div>
  );
}
