import "./UserBadge.css"
export const UserBadge = ({name, imgUrl}) => {
  return (
    <div className="user-badge">
        <div className="user-circle"> 
           <img className="user-img" src={imgUrl} alt="imagen de usuario"/>
        </div>
        <p className="user-name">{name}</p>
    </div>
  )
}
