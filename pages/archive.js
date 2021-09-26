import styles from "../styles/Archive.module.css";

export default function Archive() {
  const links = [
    "https://www.youtube.com/embed/K6yHw68VgFY",
    "https://www.youtube.com/embed/wV-bYfzfEWg",
    "https://www.youtube.com/embed/TN7dxDMNgXY",
  ];
  return (
    <div>
      <h4 className={styles.Heading}>Запись вебинаров</h4>
      <div className={styles.Recordings}>
        {links.map((l) => (
          <iframe
            width="360"
            height="215"
            src={l}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}
