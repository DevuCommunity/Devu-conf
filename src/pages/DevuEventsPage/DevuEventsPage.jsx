import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { DescriptionEventCard } from "../../cmponents/Event/DescriptionEventCard/DescriptionEventCard";
import { Button } from "../../cmponents/Shared";
import "./DevuEventsPage.css";

export const DevuEventsPage = () => {

  return (
    <>
      <Helmet>
        <title>Devu | Events</title>
      </Helmet>
      <motion.div
        id="EventsPage__container"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
      >
        <div id="EventsPage__group-wrapper">
          <DescriptionEventCard imgUrl={"/assets/networking.png"} title="DevuConf" description={'Es un evento de la comunidad y para la comunidad que reúne a los mejores developers de la región de Orizaba Veracruz para compartir su conocimiento mediante charlas y talleres, con el objetivo de motivar y ayudar a las nuevas generaciones de developers.'}>
            <Link to="/conf">
              <Button borderColor="purple" variant="bordered">
                Próximo DevuConf
              </Button>
            </Link>
          </DescriptionEventCard>
        </div>
      </motion.div>
    </>
  )
}

