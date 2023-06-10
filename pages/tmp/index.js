import MyLink from "@/components/myLink";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <motion.div layoutId="test" style={{ backgroundImage: 'url(/twitter.png)' }} className="w-1/2 h-32 bg-blue-300 relative bg-cover">
        <p>transformの影響を受ける</p>
        <motion.p layout>layoutをつけるとtransformの影響を受けない</motion.p>
      </motion.div>
      <MyLink href={"/tmp/test/"} text={"aaaaaaaa"} />
      <MyLink href={"/tmp/notTest/"} text={"bbbbbb"} />
    </>
  );
}

export default Index;