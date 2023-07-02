import classNames from "classnames"
import "./ListWrap.css"
export const ListWrap = ({children, withWrap = false}) => {
  return (
    <div className={classNames({
      "list-content": true,
      "list-wrap": withWrap
    })}>
        {children}
    </div>
  )
}
