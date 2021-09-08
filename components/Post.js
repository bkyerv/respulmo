import Markdown from "markdown-to-jsx";
import styles from "./Post.module.css";

export default function Post({ content }) {
  return (
    <div className={styles.Post}>
      <Markdown>{content}</Markdown>
    </div>
  );
}
