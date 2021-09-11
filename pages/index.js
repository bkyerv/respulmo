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
      <div >
        <p>
	  ОО «Городское Респираторное Общество» является самоуправляемым некоммерческим формированием, основанным на добровольном членстве. Основными целями ОО «Городское Респираторное Общество» является:
        </p>
	  <div>
	  <ol>
	  <li className={styles.ListItem}>Объединение специалистов в области респираторной медицины г. Алматы </li>
	  <li className={styles.ListItem}>Содействие развитию научного обмена между специалистами в области респираторной медицины</li>
	  <li className={styles.ListItem}>Развитие идей и методов респираторной медицины и их применение в клинической практике</li>
	  </ol>
	  </div>
      </div>
    </div>
  );
}
