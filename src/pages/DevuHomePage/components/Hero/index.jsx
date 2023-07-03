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
                Próximo DevuConf 5 de agosto
              </Button>
            </Link>
            <a
              className="link-registration"
              target="blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfqX4f1jc1y3WgwyoY9P2b1delKQONNRpsVBvXe_aYg7Nl6QQ/viewform?pli=1">
                🚀
                <u style={{ textAlign: "justify" }}>
                Regístrate aquí. El cupo es limitado. 
                </u>
                😎
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
