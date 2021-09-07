import Link from "next/link";

import styles from "../styles/Index.module.css";

export default function Start() {
  function renderHero() {
    return <h1>Городское респираторное общество</h1>;
  }

  function renderNotification() {
    return (
      <div className={styles.Notification}>
        <Link href="/webinarDetails">
          <a className={styles.Anchor}>
            <span className={styles.New}>14-15-16 сентября</span>
            <div className="br"></div>
            <b className="grey">Конференция на тему: </b>
            Обструктивные патологии органов дыхания в эпоху пандемии Covid-19
            <div className="br"></div>
            <span className="highlight"> Подробнее&rarr; </span>
          </a>
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      {renderNotification()}
      {renderHero()}{" "}
    </div>
  );
}
