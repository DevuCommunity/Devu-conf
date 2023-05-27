import { ActivityCard } from "../../cmponents/Activity/ActivityCard/ActivityCard";
import { ListWrap } from "../../cmponents/Shared";
import { UserCard } from "../../cmponents/User";
import "./DevuConfPage.css";

export const DevuConfPage = () => {
  return (
    <div className="event-devuconf-container">
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
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
              <UserCard
                imgUrl="/assets/user.png"
                name="Chema"
                conference="Malas practicas con JS"
                description="Sr.fullstack developer en HBE, mas de 5 anios de experiencia"
              ></UserCard>
            </ListWrap>
          </div>
        </div>
        <div className="itinerary-event">
          <div className="itinerary-title">
            <p className="fredoka ">Programa</p>
          </div>
          <div className="itinerary">
            <ListWrap withWrap="true">
              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>
              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>

              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>

              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>

              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>

              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>

              <ActivityCard
                speaker="Chema"
                conference="Malas practicas con JS"
                schedule="01:00 PM"
              ></ActivityCard>
            </ListWrap>
          </div>
        </div>
      </div>
    </div>
  );
};
