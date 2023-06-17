import {Title} from "./Title";
import {Description} from "./Description";
import {SocialNetworks} from "./SocialNetworks";

export const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 32px - 40px)",
      }}>
      <div className="DevuHomePage__hero-container">
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
    </div>
  );
};
