import { GradientText } from "../../cmponents/Shared/GradientText/GradientText.tsx";
import "./DevuHomePage.css";

export const DevuHomePage = () => {
  return (
    <>
      <div className="DevuHomePage__title-container">
        <GradientText
          type="title"
          gradientType="devu">
          DEVU
        </GradientText>
        <div className="DevuHomePage__pet">
          <img src="/assets/devu-pet.png" />
        </div>
      </div>
      <div className="DevuHomePage__description-container">
        <div className="DevuHomePage__description-wrapper">
          <div className="DevuHomePage__description">
            <span className="fredoka">Devu </span>
            <p>
              es la comunidad abierta donde  desarrolladores y
              aficionados a la tecnología comparten su conocimiento y
              brindan apoyo a quienes lo necesitan
            </p>
          </div>
          <div className="DevuHomePage__social-networks">
            <span>Únete en:</span>
            <a href="facebook.com">
              <img src="/assets/facebook.svg" />
            </a>
            <a href="discord.com">
              <img src="/assets/discord.svg" />
            </a>
          </div>
        </div>
        <div className="DevuHomePage__description-polyfill" />
      </div>
    </>
  )
}
