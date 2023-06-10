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
        style={{ backgroundImage: 'url(/youtube.png)' }}
        className="w-screen h-screen bg-white bg-contain bg-no-repeat bg-center absolute top-0 left-0 z-20"
      />
      <DummyHome />
    </>
  );
}

export default App;

const DummyHome = () => {
  return (
    <div className="w-full h-full fixed">
      <Home willSetLayoutId={false} shrink={true} />
    </div>
  );
}