
export const SocialNetworks = () => (
  <div
    className="SocialNetworks__container"
    style={{
    display: "flex",
    gap: "16px",
    marginTop: "16px",
    alignItems: "center",
    fontFamily: "Inter",
  }}>
    <span>Únete en:</span>
    <a style={{ fontSize: 0 }} href="facebook.com">
      <img src="/assets/facebook.svg" />
    </a>
    <a style={{ fontSize: 0 }} href="discord.com">
      <img src="/assets/discord.svg" />
    </a>
  </div>
)
