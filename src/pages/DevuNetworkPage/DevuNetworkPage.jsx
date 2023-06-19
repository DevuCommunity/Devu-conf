import { motion } from "framer-motion";
import { SOCIAL_NETWORK } from "../../data/devuconf/networks";
import "./DevuNetworkPage.css";
import { Helmet } from "react-helmet-async";
import { NetworksList } from "./components/NetworksList.jsx";
export const DevuNetworkPage = () => {
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
        <p className="fredoka title-network">
          Redes Sociales
        </p>
        <div className="content-network">
          <NetworksList networks={SOCIAL_NETWORK} />
        </div>
      </motion.div>
    </>
  )
}
