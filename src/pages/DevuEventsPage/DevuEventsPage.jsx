import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DescriptionEventCard } from "../../cmponents/Event/DescriptionEventCard/DescriptionEventCard";
import { Button } from "../../cmponents/Shared";
import "./DevuEventsPage.css";

export const DevuEventsPage = () => {
  return (
    <motion.div
      id="EventsPage__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div id="EventsPage__group-wrapper">
        <DescriptionEventCard
          imgUrl={"/assets/networking.png"}
          title={"Devu.conf"}
          description={
            "Es un evento de la comunidad y para la comunidad, que reúne a los mejores developers de la región de Orizaba Veracruz para compartir su conocimiento mediante charlas y talleres. con el objetivo de motivar y ayudar las nuevas generaciones de developers."
          }
        >
          <Link to="/conf">
            <Button variant="bordered" borderColor="purple">
              Proximo Devu.conf
            </Button>
          </Link>
        </DescriptionEventCard>
      </div>
    </motion.div>
  );
};
