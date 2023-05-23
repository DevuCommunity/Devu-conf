import { Card } from "../../Shared/Card"


export const UserCard = ({name, conference,
    description}) => {
  return (
    <Card>
        <p>{name}</p>
        <h5>{conference}</h5>
        <span>
            {description}
        </span>
    </Card>
  )
}
