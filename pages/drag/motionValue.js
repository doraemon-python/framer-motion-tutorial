import Frame from "@/components/frame";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionValue = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  )
  return (
    <Frame>
      <motion.div
        className="bg-white rounded-md border w-64 h-32 px-16"
        ref={ref}
        style={{ background }}
      >
        <motion.div
          className="w-full h-full rounded-md bg-blue-500 overflow-hidden"
          drag="x"
          dragElastic={{ left: 0.05, right: 0.5 }}
          dragConstraints={ref}
          style={{ x }}
        >
          {x}
        </motion.div>
      </motion.div>
    </Frame>
  );
}

export default MotionValue;