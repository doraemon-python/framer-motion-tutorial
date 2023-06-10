import Home from "@/components/home";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();
  const { appName } = router.query;
  return (
    <>
      <motion.div
        layoutId={appName}
        style={{ borderRadius: 0 }}
        className="w-screen h-screen bg-white fixed z-10"
      >
      </motion.div>
      <motion.div
        layoutId={appName + "-filter"}
        style={{ borderRadius: 0, opacity: 1 }}
        className="w-screen h-screen bg-white fixed z-20"
      />
      <DummyHome />
    </>
  );
}

export default App;

const DummyHome = () => {
  return (
    <div className="w-screen h-screen fixed">
      <Home willSetLayoutId={false} shrink={true} />
    </div>
  );
}