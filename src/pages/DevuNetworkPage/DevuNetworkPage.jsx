import { motion } from "framer-motion";
import { SOCIAL_NETWORK } from "../../data/devuconf/networks";
import "./DevuNetworkPage.css";
import { Helmet } from "react-helmet-async";
export const DevuNetworkPage = () => {
  const socialNetworks = SOCIAL_NETWORK;
  return (
    <>
      <Helmet>
        <title>Devu | Networks</title>
      </Helmet>
      <motion.div
        className="container-network"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
      >
        <p className="fredoka title-network">Redes Sociales</p>
        <div className="content-network">
          {
            socialNetworks.map((net) => (
              <a key={net.id} href={net.url} target="_blank" rel="noreferrer" className="icon-box">
                <img className="icon-social" src={`../../../assets/icons/icon-${net.name}.svg`} alt={net.nam} />
              </a>
            ))
          }
        </div>
      </motion.div>
    </>
  )
}
