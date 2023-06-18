import { motion } from "framer-motion";
import { ActivityCard } from "../../cmponents/Activity/ActivityCard/ActivityCard";
import { ListWrap } from "../../cmponents/Shared";
import { UserCard } from "../../cmponents/User";
import { ITINERARY } from "../../data/devuconf/itinerary";
import { SPEAKERS } from "../../data/devuconf/speakers";
import "./DevuConfPage.css";

export const DevuConfPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}

     className="event-devuconf-container" >
      <div className="current-event">
        <div className="description-panel">
          <div className="description-event">
            <div className="header">
              <span className="fredoka t-gradient title">V0.1.0</span>
              <p className="fredoka sub-title">Devu.conf</p>
            </div>
            <p className="event-description">
              Esta Devu.conf tendrá cupo maximo de 20 personas y se llevará a
              cabo el 12 de diciembre del 2023 a la 1:00 pm, el lugar del evento
              será en el salón Lya, dentro del evento tendremos la participación
              de:
            </p>
          </div>
          <div className="speakers-panel">
            <ListWrap withWrap="true">

              {
                SPEAKERS.map((speaker) => (
                  <UserCard
                  key={speaker.id}
                    imgUrl="/assets/user.png"
                    name={speaker.name}
                    conference={speaker.conference}
                    description={speaker.description}
                  ></UserCard>
                ))
              }

            </ListWrap>
          </div>
        </div>
        <div className="itinerary-event">
          <div className="itinerary-title">
            <p className="fredoka ">Programa</p>
          </div>
          <div className="itinerary">
            <ListWrap withWrap="true">
              {
                ITINERARY.map((item) => (
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
      </div>
    </motion.div>
  );
};
