import Link from "next/link";
import style from "./Webinar.module.css";

export default function Webinar() {
  return (
    <div className={style.Card}>
      <div className={style.Date}>
        <p>20 сентября 2021</p>
        <p>Время: 15:00</p>
      </div>
      <div className={style.ConfInfo}>
        <h3>
          Тема: Что мы узнали о КОВИД спустя полтора года после появления
          первого штамма
        </h3>
      </div>
      <Link href="/webinarDetails">
        <a className="btn">Узнать подробнее</a>
      </Link>
    </div>
  );
}

//<div className={style.ConfSpeakers}>
//<h3>Ключевые спикеры</h3>
//<ul>
//<li>
//<p>Игорь Авдеев</p>
//</li>
//<li>
//<p>Тельман Исмаилов</p>
//</li>
//<li>
//<p>Екатерина Андреева</p>
//</li>
//<li>
//<p>Тимати</p>
//</li>
//</ul>
//</div>
