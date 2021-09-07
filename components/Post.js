import styles from "./Post.module.css";
export default function Post({ title, content }) {
  return (
    <div className={styles.Post}>
      <h3 className={styles.PostTitle}>{title}</h3>
      <div
        className={styles.PostBody}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
