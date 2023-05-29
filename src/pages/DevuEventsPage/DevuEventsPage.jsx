import { useNavigate } from "react-router-dom";
import { DescriptionEventCard } from "../../cmponents/Event/DescriptionEventCard/DescriptionEventCard";
import { Button } from "../../cmponents/Shared";
export const DevuEventsPage = () => {
    const navigate = useNavigate();

    const handleClickDesc = () => {
        navigate("/conf");
    }
  return (
    <div className="events-container">
        <DescriptionEventCard imgUrl={"/assets/networking.png"} title={"Devu.conf"} description={'Es un evento de la comunidad y para la comunidad, que reúne a los mejores developers de la región de Orizaba Veracruz para compartir su conocimiento mediante charlas y talleres. con el objetivo de motivar y ayudar las nuevas generaciones de developers.'}>
        <Button boderColor="purple" handleClick={handleClickDesc}>
                Proximo Devu.conf
              </Button>
        </DescriptionEventCard>
    </div>
  )
}
