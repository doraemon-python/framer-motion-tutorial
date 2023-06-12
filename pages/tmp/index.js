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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} onAnimationComplete={() => console.log('上のやつ終了')} className="w-full h-32 my-4 bg-sky-500" />
      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4 }} onAnimationComplete={() => console.log('下のやつ終了')} className="w-full h-32 my-4 bg-sky-500" />
    </>
  );
}

export default Index;