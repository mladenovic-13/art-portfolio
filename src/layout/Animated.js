import { motion } from "framer-motion";

export default function Animated({ children }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.5 }}
      transition={{ delay: 0.2, type: "spring" }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
