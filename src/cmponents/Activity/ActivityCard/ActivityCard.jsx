import { Card } from "../../Shared";
import "./ActivityCard.css";

export const ActivityCard = ({ conference, schedule, speaker }) => {
  return (
    <div className="activity-card">
      <Card boderColor="purple" withBackground={false}>
        <p className="fredoka activity-conference">{conference}</p>
        <p className="fredoka activity-speaker">{speaker}</p>
        <span className="activity-description">{schedule}</span>
      </Card>
    </div>
  );
};
