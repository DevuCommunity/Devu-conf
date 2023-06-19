
export const SocialNetworkItem = ({
  name,
  url
}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="icon-box"
  >
    <img
      className="icon-social"
      src={`../../../assets/icons/icon-${name}.svg`}
      alt={name}
    />
  </a>
);
