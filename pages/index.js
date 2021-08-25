import Main from "../components/Main";
import Notification from "../components/Notification";

import style from "./Index.module.css";

export default function Start() {
  return (
    <div className="container">
      <div className={style.Container}>
        <Notification />
        <Main />
      </div>
    </div>
  );
}
