import Frame from "@/components/frame";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Frame>
      <motion.div
        className="w-32 h-32 leading-[8rem] text-center text-white font-bold rounded-tr-lg bg-blue-500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >Normal</motion.div>
      <motion.div
        className="w-32 h-32 leading-[8rem] text-center text-white font-bold rounded-md bg-blue-500"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [45, 0, 270, 270, 45],
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.4, 0.7, 1],
          repeat: Infinity,
        }}
      >Key Frame</motion.div>
    </Frame>
  );
}

export default Index;