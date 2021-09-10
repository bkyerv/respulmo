import Link from "next/link";

import { getAllPosts } from "../lib/api";
import styles from "../styles/Blog.module.css";

export default function BlogList({ posts }) {
  function renderBlogData(title, date) {
    return (
      <div className={styles.List}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Date}>{date}</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="header">Полезные материалы</h3>

      {posts.map((p) => (
        <div key={p.slug}>
          <Link href={`/posts/${p.slug}`}>
            <a>{renderBlogData(p.title, p.date)}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug"]);

  return {
    props: {
      posts,
    },
  };
}
