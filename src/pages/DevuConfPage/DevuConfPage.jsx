import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { itinerary } from "../../data/devuconf/itinerary";
import { speakers } from "../../data/devuconf/speakers";
import "./DevuConfPage.css";
import { Itinerary } from "./components/Itinerary";
import { SpeakersPanel } from "./components/SpeakersPanel";

export const DevuConfPage = () => {
  const PROGRAM_READY = false;

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
                DevuConf es un evento totalmente gratis, el cual tendrá un cupo máximo de 15 personas a las cuales se les dará un kit de bienvenida. DevuConf se llevará a cabo el 5 de agosto del 2023 de 1:00 pm a 4:45 pm. El lugar del evento será en el salón LYA Space.
                </p>
                <p>
                  <a className="ConfPage__location" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/XT4ptyZBJEgqEScn9">
                    <strong>Ubicación 📍</strong> Justo Sierra 9ª, Col. Ferrer Guardia, Orizaba, Ver.
                  </a>
                </p>
                <p>
                  Contaremos con la participación de los siguientes ponentes:
                </p>
              </div>
            </div>
            <SpeakersPanel
              speakers={speakers(PROGRAM_READY)} />
          </div>
          <Itinerary itinerary={itinerary(PROGRAM_READY)} />
        </div>
      </motion.div>
    </>
  );
};
