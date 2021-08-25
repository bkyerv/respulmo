import Speaker from "./Speaker";
import style from "./Details.module.css";
import spkrs from "../speakers/speakers";

export default function Details() {
  return (
    <div>
      <p className={style.DT}>
        14-15-16 сентября 2021
        <br />
        Время: -------
      </p>
      <p className="header">
        <span className={style.Subject}> Тема конференции</span>
        <br />
        <b>Обструктивные патологии органов дыхания в эпоху пандемии Covid-19</b>
      </p>
      <div className="header">
        <p className={style.Subject}>Спикеры</p>
      </div>
      {spkrs.map((s) => (
        <Speaker key={s.name} spkr={s} />
      ))}
    </div>
  );
}
