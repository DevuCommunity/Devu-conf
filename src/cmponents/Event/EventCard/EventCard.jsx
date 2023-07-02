import { Card } from "../../Shared";
import "./EventCard.css";
export const EventCard = ({title, subtitle, dateUbication, active = false}) => {
  let border = active ? "radiactive" : "";
  return (
    <div className="event-card">
        <Card boderColor={border} withBackground={true}>
            <h1 className="fredoka t-gradient event-title"> {title}</h1>
            <p className=" fredoka event-sub-title">{subtitle}</p>
            <span className="event-date-ubication">{dateUbication}</span>
        </Card>
    </div>
  )
}

