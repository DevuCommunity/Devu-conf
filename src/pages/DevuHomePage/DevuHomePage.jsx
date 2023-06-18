import { motion } from "framer-motion"
import "./DevuHomePage.css";
import { Hero } from "./components/Hero/index";

export const DevuHomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
    >
        <Hero />
    </motion.div>
  );
};
