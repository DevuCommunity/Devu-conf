import { ActivityCard } from "../../../cmponents/Activity/ActivityCard/ActivityCard";
import { ListWrap } from "../../../cmponents/Shared";

export const Itinerary = ({ itinerary = [] }) => (
  <div className="itinerary-event">
    <div className="itinerary-title">
      <p className="fredoka ">Programa</p>
    </div>
    <div className="itinerary">
      <ListWrap withWrap="true">
        {
          itinerary.map((item) => (
            <ActivityCard
              key={item.id}
              speaker={item.speaker}
              conference={item.title}
              schedule={item.time}
            ></ActivityCard>
          ))
        }

      </ListWrap>
    </div>
  </div>
)
