import Home from "@/components/home";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


// ホーム画面: 白幕(opacity: 0, zIndex: 2 | 1) on アイコン(opacity: 1, zIndex: 1 | 0)(zIndexの表記: アニメーション中 | 終了後)
// アプリ画面: アプリ(opacity: 1, zIndex: 20) on 白幕(opacity:1)  on 黒幕(opacity: 0 => 1)
// 白幕はアプリ終了時のアイコンの不自然さを隠すためにあり、起動時は見える必要がない

const App = () => {
  const router = useRouter();
  const y = useMotionValue(0);
  const borderRadius = useTransform(y, [0, 100], [0, 20]);
  const scale = useTransform(y, [0, 100], [1, 0.9])
  const { appName, mode, bg } = router.query;
  const handleClick = (event, info) => {
    if (info.offset.y >= 200) {
      router.push({ pathname: "/layout/ios", query: { mode: mode, bg: bg } });
    }
  }
  return (
    <>
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        style={{ y, borderRadius, scale }}
        onDrag={handleClick}
        className="w-screen h-screen fixed z-10 overflow-hidden"
      >
        <motion.div
          layoutId={appName + "-filter"}
          style={{ borderRadius: 0, opacity: 1 }}
          className="w-screen h-screen bg-white fixed top-0 left-0"
        />
        {appName === "bg-seter" ? (
          <BgSeter appName={appName} />
        ) : (
          <motion.div
            layoutId={appName}
            style={{ borderRadius: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full bg-white fixed top-0 left-0 flex justify-center items-center"
          >
            <h1 className="text-3xl font-bold">アプリ: {appName}</h1>
          </motion.div>
        )}
      </motion.div>
      <DummyHome />
    </>
  );
}

export default App;

const BgSeter = ({ appName }) => {
  const router = useRouter();
  const { bg, mode } = router.query;
  const [myBg, setMyBg] = useState((bg !== "/iphone-bg.png" && bg !== "/iphone-bg-2.jpg" && bg !== "/iphone-bg-3.jpg" && bg !== "/iphone-bg-4.jpg") ? bg : "");
  const [myMode, setMyMode] = useState(mode);
  const handleClick = (e) => {
    setMyBg(e.target.value);
  }
  return (
    <motion.div layoutId={appName} className="w-full h-full fixed top-0 left-0 bg-white flex flex-col justify-around items-center">
      <Link href={{ pathname: "/layout/ios/", query: { mode: "dark", bg: "/iphone-bg.png" } }} className="w-11/12 p-2 border rounded-md text-center flex justify-between">
        <p className="text-xl leading-[48px]">壁紙1</p>
        <Image style={{ width: 48, height: 48, borderRadius: 4 }} alt="bg" src={"/iphone-bg.png"} width={48} height={48} />
      </Link>
      <Link href={{ pathname: "/layout/ios/", query: { mode: "dark", bg: "/iphone-bg-2.jpg" } }} className="w-11/12 p-2 border rounded-md text-center flex justify-between">
        <p className="text-xl leading-[48px]">壁紙2</p>
        <Image style={{ width: 48, height: 48, borderRadius: 4 }} alt="bg" src={"/iphone-bg-2.jpg"} width={48} height={48} />
      </Link>
      <Link href={{ pathname: "/layout/ios/", query: { mode: "dark", bg: "/iphone-bg-3.jpg" } }} className="w-11/12 p-2 border rounded-md text-center flex justify-between">
        <p className="text-xl leading-[48px]">壁紙3</p>
        <Image style={{ width: 48, height: 48, borderRadius: 4 }} alt="bg" src={"/iphone-bg-3.jpg"} width={48} height={48} />
      </Link>
      <Link href={{ pathname: "/layout/ios/", query: { mode: "dark", bg: "/iphone-bg-4.jpg" } }} className="w-11/12 p-2 border rounded-md text-center flex justify-between">
        <p className="text-xl leading-[48px]">壁紙4</p>
        <Image style={{ width: 48, height: 48, borderRadius: 4 }} alt="bg" src={"/iphone-bg-4.jpg"} width={48} height={48} />
      </Link>
      <div className="w-11/12 border rounded-md p-4">
        <div className="flex justify-evenly mb-2">
          <p>文字の色:</p>
          <button onClick={() => setMyMode("")} style={{ borderColor: myMode !== "dark" && "rgb(34, 197, 94)" }} className="border px-2 rounded-full">黒</button>
          <button onClick={() => setMyMode("dark")} style={{ borderColor: myMode === "dark" && "rgb(34, 197, 94)" }} className="border px-2 rounded-full">白</button>
        </div>
        <input value={myBg} onChange={handleClick} className="w-full p-2 mb-2 border rounded-md" placeholder="ここにお好みの画像のURLを貼り付け" />
        <Link href={{ pathname: "/layout/ios/", query: { mode: myMode, bg: myBg } }} className="block w-full p-2 border rounded-md text-center">お好み</Link>
      </div>
    </motion.div>
  );
}

const DummyHome = () => {
  return (
    <div className="w-screen h-screen fixed">
      <Home willSetLayoutId={false} shrink={true} />
    </div>
  );
}