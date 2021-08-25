import Link from "next/link";

import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className="lockup">
      <nav>
        <ul className={style.Nav}>
          <li className={style.ListItem}>
            <Link href="/">
              <a className={style.NavLink}>О наc</a>
            </Link>
          </li>
          <li className={style.ListItem}>
            <Link href="/materials">
              <a className={style.NavLink}>Материалы</a>
            </Link>
          </li>
          <li className={style.ListItem}>
            <Link href="/webinarDetails">
              <a className={style.NavLink}>Вебинар</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
