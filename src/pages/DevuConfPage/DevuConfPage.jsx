import { motion } from "framer-motion";
import { ActivityCard } from "../../cmponents/Activity/ActivityCard/ActivityCard";
import { ListWrap } from "../../cmponents/Shared";
import { UserCard } from "../../cmponents/User";
import { ITINERARY } from "../../data/devuconf/itinerary";
import { SPEAKERS } from "../../data/devuconf/speakers";
import "./DevuConfPage.css";
import { Helmet } from "react-helmet-async";

export const DevuConfPage = () => {
  return (
    <>
      <Helmet>
        <title>Devu | Conf</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}

        className="event-devuconf-container" >
        <div className="current-event">
          <div className="description-panel">
            <div className="description-event">
              <div className="header">
                <span className="fredoka t-gradient title">V0.1.0</span>
                <p className="fredoka sub-title">DevuConf</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p className="event-description">
                  Esta DevuConf tendrá un cupo maximo de 15 personas y se llevará a
                  cabo el 5 de agosto del 2023 a la 1:00 pm. El lugar del evento
                  será en el salón LYA Space.
                </p>
                <p>
                  <a className="ConfPage__location" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/XT4ptyZBJEgqEScn9">
                    <strong>Ubicación 📍</strong> Justo Sierra 9ª, Col. Ferrer Guardia, Orizaba, Ver.
                  </a>
                </p>
                <p>
                  Contaremos con la participación de:
                </p>
              </div>
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
    </>
  );
};
