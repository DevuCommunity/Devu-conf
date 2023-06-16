import classNames from "classnames";
import "./Button.css";
export const Button = ({children, handleClick, boderColor= "purple"}) => {
  return (
    <button className={classNames({
        "btn fredoka": true,
        'btn-border-purple': boderColor === "purple",
        'btn-border-radiactive': boderColor === "radiactive"
      })} onClick={handleClick}>{children}</button>
  )
}
