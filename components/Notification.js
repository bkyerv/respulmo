import Link from "next/link";

import style from "./Notification.module.css";

export default function Alert() {
  return (
    <div className={style.Notification}>
      <Link href="/webinarDetails">
        <a className={style.Anchor}>
          <span className={style.New}>Скоро</span>
          <div className={style.Br}></div>
          <b>Webinar</b>
          Вебинар на тему COVID-19
          <span className="highlight">Learn more</span>
        </a>
      </Link>
    </div>
  );
}
