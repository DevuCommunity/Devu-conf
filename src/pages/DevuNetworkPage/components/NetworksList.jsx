import { SocialNetworkItem } from "./SocialNetworkItem.jsx";

/**
 * @param {{ url: string; name: string; }[]} networks
 * @return {JSX.Element}
 * @constructor
 */
export const NetworksList = ({ networks = [] }) => (
  <>
    {networks
      .map(network => (
        <SocialNetworkItem key={network.name} {...network} />
      )
    )}
  </>
)
