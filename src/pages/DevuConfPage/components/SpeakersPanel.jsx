import { ListWrap } from "../../../cmponents/Shared";
import { UserCard } from "../../../cmponents/User";

export const SpeakersPanel = ({ speakers = [] }) => (
  <div className="speakers-panel">
    <ListWrap withWrap="false">
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
