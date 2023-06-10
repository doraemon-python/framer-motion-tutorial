import Frame from "@/components/frame";
import MyButton from "@/components/myButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const [exist, setExist] = useState(true);

  const handleClick = () => {
    setExist(!exist);
  }
  return (
    <Frame>
      <MyButton onClick={handleClick} text={exist && "非表示" || "表示"} />
      <AnimatePresence>
        {exist &&
          <motion.div
            className="w-32 h-32 bg-blue-500 rounded-tr-lg"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          />
        }
      </AnimatePresence>
    </Frame>
  );
}

export default Index;