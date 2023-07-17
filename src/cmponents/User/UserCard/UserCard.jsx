import { Card } from "../../Shared"
import { UserBadge } from "../UserBadge/UserBadge"
import "./UserCard.css"

export const UserCard = ({imgUrl, name, conference, description}) => {
  return (
       <div className="user-card">
    <Card boderColor="" withBackground="true">

       <UserBadge imgUrl={imgUrl} name={name} />
        <span className="description">
            {description}
        </span>
        
        <p className="fredoka conference">{conference}</p>
    </Card>
       </div>
  )
}
