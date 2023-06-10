import Frame from "@/components/frame";
import MyLink from "@/components/myLink";
import { motion } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const ref = useRef(null);
  return (
    <Frame>
      <MyLink href={"drag/motionValue/"} text={"motion value"} />
      <motion.div
        className="bg-white rounded-md border w-64 h-64 p-16"
        ref={ref}
      >
        <motion.div
          className="w-full h-full rounded-md bg-blue-500"
          drag
          dragConstraints={ref}
        />
      </motion.div>
    </Frame>
  );
}

export default Index;