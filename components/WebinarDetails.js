import Link from 'next/link';
import Speaker from "./Speaker";
import style from "./WebinarDetails.module.css";
import spkrs from "../speakers/speakers";

export default function Details() {
  return (
    <div>
      <p className={style.DT}>
        14-15-16 сентября 2021
        <br />
        Время: 17:00 по времени Алматы
      </p>
      <p className="header">
        <span className={style.Subject}> Тема конференции</span>
        <br />
        <b>Обструктивные патологии органов дыхания в эпоху пандемии Covid-19</b>
      </p>
	  <Link href='../public/doc.pdf'>
	  Programma
	  </Link>
      <div className="header">
        <p className={style.Subject}>Спикеры</p>
      </div>

      <div className={style.List}>
        {spkrs.map((s) => (
          <Speaker key={s.name} spkr={s} />
        ))}
      </div>
    </div>
  );
}
