import Link from "next/link";

import style from "./Notification.module.css";

export default function Alert() {
  return (
    <div className={style.Notification}>
      <Link href="/webinarDetails">
        <a className={style.Anchor}>
          <span className={style.New}>14-15-16 сентября</span>
          <div className="br"></div>
          Конференция на тему:{" "}
          <b>
            Обструктивные патологии органов дыхания в эпоху пандемии Covid-19
          </b>
          <div className="br"></div>
          <span className="highlight">Подробнее...</span>
        </a>
      </Link>
    </div>
  );
}
