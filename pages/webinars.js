import Header from "../components/Header";
import Webinar from "../components/Webinar";

const webinars = [
  {
    title: "Новые подходы в лечении КОВИД 19",
    date: "20 сентября 2021",
    time: "13:15 Almaty time",
    speakers: ["Tair Temirlanovich", "Avdeyev Igor", "Russkaia zhenshina"],
  },
];

export default function Webinars() {
  return (
    <div className="lockup section ">
      <Header>
        <h3>Вебинары</h3>
      </Header>
      <div className="list">
        {webinars.map((w) => (
          <Webinar key={w.date} webinar={w} />
        ))}
      </div>
    </div>
  );
}
