import "./DevuHomePage.css";
import { Title } from "./components/title";
import { Description } from "./components/description";
import { SocialNetworks } from "./components/social-networks";

export const DevuHomePage = () => {
  return (
    <div className="DevuHomePage__container">
      <div className="DevuHomePage__title">
        <Title />
      </div>
      <div className="DevuHomePage__pet">
        <img src="/assets/devu-pet.png" />
      </div>
      <div className="DevuHomePage__description">
        <Description />
        <SocialNetworks />
      </div>
    </div>
  )
}
