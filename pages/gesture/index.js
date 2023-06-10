import Frame from "@/components/frame";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Frame>
      <motion.div
        className="w-32 h-32 bg-blue-500"
        initial={{ borderRadius: "10%", opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        whileHover={{ scale: 1.3, borderRadius: 0 }}
        whileTap={{ scale: 1.1, borderRadius: 0 }}
      />
    </Frame >
  );
}

export default Index;