import { Link } from "react-router-dom";
import { Button } from "../../../../cmponents/Shared";
import { Description } from "./Description";
import "./Hero.css";
import { SocialNetworks } from "./SocialNetworks";
import { Title } from "./Title";

export const Hero = () => {
  return (
    <div className="DevuHomePage__hero-center">
      <div style={{ margin: "auto" }}>
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
            <Link to="/conf">
              <Button
                variant="bordered"
                borderColor="purple">
                Próximo DevuConf
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
