import Image from "next/image";
import styles from "./Footer.module.css";

import logo from "../public/logo/символ.jpg";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.LeftSide}>
        <Image src={logo} width="50" height="50" />
        <strong>Городское респираторное общество</strong>
      </div>
      <div />
      <div className={styles.RightSide}>
        Адрес: город Алматы, Ауэзовский район, улица Сулейменова, 24А, кв 61{" "}
      </div>
    </div>
  );
}
