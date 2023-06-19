
export const SocialNetworks = () => (
  <div
    className="SocialNetworks__container"
    style={{
    display: "flex",
    gap: "16px",
    alignItems: "center",
    fontFamily: "Inter",
  }}>
    <span>Únete en:</span>
    <a style={{ fontSize: 0 }} href="facebook.com">
      <img src="/assets/facebook.svg" />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: 0 }}
      href="https://discord.gg/cGzzwVJtB"
    >
      <img src="/assets/discord.svg" />
    </a>
  </div>
)
