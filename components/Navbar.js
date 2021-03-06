import Link from "next/link";

import style from "./Navbar.module.css";
import logo from "../public/logo/символ.jpg";
import logo2 from "../public/logo/символ2.jpg";

export default function Navbar() {
  return (
    <div className="flex">
      <Link href="/">
        <img src={logo.src} className={style.Logo_sm}/>
      </Link>
      <Link href="/">
        <img src={logo2.src} className={style.Logo}/>
      </Link>
      <nav>
        <ul className={style.Nav}>
          <li className={style.ListItem}>
            <Link href="/">
              <a className={style.NavLink}>Главная</a>
            </Link>
          </li>
          <li className={style.ListItem}>
            <Link href="/blog">
              <a className={style.NavLink}>Статьи</a>
            </Link>
          </li>
          <li className={style.ListItem}>
            <Link href="/archive">
              <a className={style.NavLink}>Архив</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
