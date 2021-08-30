import style from "./Article.module.css";

export default function Article({ title, date }) {
  return (
    <div className={style.Card}>
      <p className={style.Title}>{title}</p>
      <br />
      <p className={style.Date}>{date}</p>
    </div>
  );
}
