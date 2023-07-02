import classNames from "classnames";
import { Card } from "../../Shared";
import "./DescriptionEventCard.css";
export const DescriptionEventCard = ({
  children,
  imgUrl,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div className="description-event-card">
      <Card withBackground="true">
        <div
          className={classNames({
            "desc-content": true,
            "row-reverse": reverse,
          })}
        >
          <div className="desc-inage">
            <img src={imgUrl} alt="imagen de usuario" />
          </div>
          <div className="desc">
            <p className="fredoka desc-title">{title}</p>
            <p className=" desc-text">{description}</p>
            <div>
            {children}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
