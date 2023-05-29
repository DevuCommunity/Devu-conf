
import classNames from "classnames";
import "./Card.css";


export const Card = ({children, boderColor = "", withBackground = false}) => {


  return (
    <div className={classNames({
      card: true,
      'card-border-purple': boderColor === "purple",
      'card-border-radiactive': boderColor === "radiactive",
      "card-gradient": withBackground

    })} >
      {children}
    </div>
  )
}
