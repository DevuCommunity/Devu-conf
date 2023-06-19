
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
    <a
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: 0 }}
      href="https://www.facebook.com/profile.php?id=100093421317007&is_tour_dismissed=true"
    >
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
