import MyLink from "@/components/myLink";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const A = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <motion.div layoutId={id} style={{ backgroundImage: 'url(/youtube.png)' }} className="w-full h-64 bg-blue-300 bg-cover">
        <p>transformの影響を受ける</p>
        <motion.p layout>{id}</motion.p>
        <motion.p layout>layoutをつけるとtransformの影響を受けない</motion.p>
      </motion.div>
      <MyLink href={"/tmp/"} text={"return"} />
    </>
  );
}

export default A;