import { motion } from "framer-motion";

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export default function CardMovie({ emoji, size }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="card">
        <img style={{ height: size, width: size }} src={`${emoji}`} />
      </motion.div>
    </motion.div>
  );
}
