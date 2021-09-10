import Link from "next/link";

import styles from "../styles/Index.module.css";

export default function Start() {
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
    <div>
      {renderNotification()}
      <div className="flex">
        <div className={styles.Title}>
          <h1>Городское респираторное общество</h1>
        </div>
        <div className={styles.HeroImg} />
      </div>
      <div className={styles.Mission}>
        <p>
          Основной задачей нашего общества является создание и развитие среды
          для обмена знанием и опытом между специалистами в области лечения
          заболеваний дыхательных путей
        </p>
      </div>
    </div>
  );
}
