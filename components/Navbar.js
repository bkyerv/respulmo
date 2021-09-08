import Link from "next/link";

import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <ul className={style.Nav}>
          <li className={style.ListItem}>
            <Link href="/">
              <a className={style.NavLink}>О наc</a>
            </Link>
          </li>
          <li className={style.ListItem}>
            <Link href="/blog">
              <a className={style.NavLink}>Статьи</a>
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
