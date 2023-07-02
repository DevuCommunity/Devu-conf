import { Card } from "../../Shared"
import { UserBadge } from "../UserBadge/UserBadge"
import "./UserCard.css"

export const UserCard = ({imgUrl, name, conference, description}) => {
  return (
       <div className="user-card">
    <Card boderColor="" withBackground="true">
       <UserBadge imgUrl={imgUrl} name={name} />
        <p className="fredoka conference">{conference}</p>
        <span className="description">
            {description}
        </span>
    </Card>
       </div>
  )
}
