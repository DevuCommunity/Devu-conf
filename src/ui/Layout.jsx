import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="layout-container" >
      <div className="main-container">
        <div className="main-colum">
          <img src="/assets/devu-icon.png" alt="logo" />
        </div>
        <div className="main-content">{children}</div>
      </div>
      <div className="menu">
        <nav></nav>
      </div>
    </div>
  );
};
