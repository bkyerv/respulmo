import Image from "next/image";
import style from "./Speaker.module.css";

export default function Speaker({ spkr }) {
  const { pic, name, creds } = spkr;
  return (
    <div className={style.Speaker}>
      <div className={style.Img}>
        <Image src={pic} alt="profile picture" className={style.ProfilePic} />
      </div>
      <div className={style.Info}>
        <div className={style.Name}>
          <p>{name}</p>
        </div>
        <p className={style.Credentials}>{creds}</p>
      </div>
    </div>
  );
}
