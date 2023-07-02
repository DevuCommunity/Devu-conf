import { UserCard } from "../../../cmponents/User";
import { ListWrap } from "../../../cmponents/Shared";

export const SpeakersPanel = ({ speakers = [] }) => (
  <div className="speakers-panel">
    <ListWrap withWrap="true">
      {
        speakers.map((speaker) => (
          <UserCard
            key={speaker.id}
            imgUrl={`/assets/${speaker.photo}`}
            name={speaker.name}
            conference={speaker.conference}
            description={speaker.description}
          ></UserCard>
        ))
      }
    </ListWrap>
  </div>
)
