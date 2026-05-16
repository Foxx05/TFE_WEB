import { useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: Props) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>

        <motion.div className="page-loader" aria-hidden>
          {[0, 1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              className="page-loader__tile"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              exit={{ scaleX: 1 }}
              transition={{
                duration: 0.65,
                delay: item * 0.08,
                ease: [0.83, 0, 0.17, 1],
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}