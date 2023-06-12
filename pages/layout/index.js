import Frame from "@/components/frame";
import MyLink from "@/components/myLink";
import { motion } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const [isLeft, setIsLeft] = useState(true);
  const [isBig, setIsBig] = useState(false);
  const handleClick = () => {
    setIsLeft(!isLeft);
  }
  return (
    <Frame>
      <MyLink href={{ pathname: "/layout/ios/", query: { mode: "dark", bg: "/iphone-bg.png" } }} text={"iosみたいなアニメーション"} />
      <div
        onClick={handleClick}
        className={`w-1/3 h-8 rounded-md bg-white outline outline-gray-300 flex ${!isLeft && 'flex-row-reverse'}`}>
        <motion.div
          layout
          className="w-6 h-6 m-1 bg-blue-500 rounded-md"
        />
      </div>
      <motion.div
        layout
        onClick={() => setIsBig(!isBig)}
        className={isBig ? "fixed w-11/12 h-2/3 rounded-md bg-white border" : "w-1/3 h-8 bg-white border rounded-md"}
      >
        {isBig ? (
          <h1>でっかでか</h1>
        ) : (
          <h1>bigじゃないよ</h1>
        )}
      </motion.div>
    </Frame>
  );
}

export default Index;