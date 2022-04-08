import { motion } from "framer-motion";

export default function Animated({ children }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      transition={{ delay: 0.1, type: "spring" }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
