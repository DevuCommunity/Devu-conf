import { GradientText } from "../../cmponents/Shared/GradientText/GradientText.tsx";

export const DevuHomePage = () => {
  return (
    <div>
      <GradientText type="title" gradientType="devu">
        DEVU
      </GradientText>
      <div className="DevuPet"></div>
      <div className="landingPage_description">
        <div>
          <span className="fredoka ">Devu</span> es la comunidad abierta donde  desarrolladores y
          aficionados a la tecnología comparten su conocimiento y
          brindan apoyo a quienes lo necesitan
        </div>
        <div>
          <span>Únete en:</span>
          <div>Facebook</div>
          <div>Discord</div>
        </div>
      </div>
    </div>
  )
}
