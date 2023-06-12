import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


const Home = ({ willSetLayoutId = true, shrink = false }) => {
  const router = useRouter();
  const { bg, mode } = router.query;

  return (
    <div
      style={{ backgroundImage: bg && `url(${bg})`, color: mode === "dark" && "white" }}
      className="w-screen h-screen bg-cover bg-center bg-fixed overflow-scroll flex flex-col"
    >
      <TopBar />
      <MainIcons willSetLayoutId={willSetLayoutId} shrink={shrink} />
      <BottomIconsBar willSetLayoutId={willSetLayoutId} shrink={shrink} mode={mode} />
      {/* opacity, transformが設定された要素は出る順にどれが上か決まる。 */}
      {/* Filterはこの中では一番上に表示させたいため、最後に配置する。 */}
      {shrink && <BgFilter shrink={shrink} />}
    </div >
  );
}

export default Home;


const TopBar = () => {
  const date = new Date();
  const to2Digit = (int) => {
    if (int < 10) {
      return "0" + int;
    } else {
      return int
    }
  }
  const h = to2Digit(date.getHours());
  const m = to2Digit(date.getMinutes());
  return (
    <div className="w-full h-10 pt-2 flex justify-between">
      <div className="w-1/3 flex justify-center items-center">{`${h}:${m}`}</div>
      <div className="w-1/3 px-3">
        <Link href={"/"} className="block h-full bg-black rounded-full" />
      </div>
      <div className="w-1/3 px-4 flex justify-around items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

const MainIcons = ({ willSetLayoutId, shrink }) => {
  return (
    <motion.div
      initial={{ scale: shrink ? 1 : 0.8 }}
      animate={{ scale: shrink ? [1, 0.8, 1] : 1 }}
      transition={{ ease: "linear", duration: shrink ? 0.6 : 0.3 }}
      className="w-full flex-grow"
    >
      <div className="w-[95%] mx-auto px-3 pt-6 grid grid-cols-4 gap-x-6 gap-y-4">
        {mainApps.map(item => {
          if (item.type === "app") {
            return <TopIcon key={item.id} willSetLayoutId={willSetLayoutId} link={item.link} name={item.name} icon={item.icon} />
          } else if (item.type === "widget") {
            return <BaseWidget key={item.id} willSetLayoutId={willSetLayoutId} link={item.link} name={item.name} component={item.component} />
          }
        })}
      </div>
    </motion.div>
  );
}

const BottomIconsBar = ({ willSetLayoutId, shrink, mode }) => {
  return (
    <motion.div
      initial={{ translateY: shrink ? 0 : "-100%" }}
      animate={{ translateY: shrink ? ["0%", "100%", "0%"] : 0 }}
      transition={{ ease: "easeOut", duration: shrink ? 0.6 : 0.3 }}
      className="w-full h-[12%] pb-3"
    >
      <div className={`w-[95%] h-full mx-auto px-3 rounded-3xl ${mode === "dark" ? "bg-white/20" : "bg-black/10"} backdrop-blur grid grid-cols-4 gap-6`}>
        {BottomApps.map(item => <BottomIcon key={item.id} willSetLayoutId={willSetLayoutId} link={item.link} icon={item.icon} />)}
      </div>
    </motion.div>
  );
}

const BgFilter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.7] }}
      transition={{ duration: 0.6 }}
      className="w-screen h-screen fixed bg-black"
    />
  );
}


// 以下ウィジェットの内容
const WidgetWeather = () => {
  return (
    <div className="w-full h-full px-5 py-3 flex flex-col justify-between text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <div>
        <p className="text-lg">新宿区</p>
        <p className="text-5xl font-light">24°</p>
      </div>
      <div className="text-sm">
        <p>曇り時々晴れ</p>
        <p>最高:28° 最低:19°</p>
      </div>
    </div>
  );
}

const WigetPhotos = () => {
  return (
    <div style={{ backgroundImage: "url(/mountain.jpg)" }} className="w-full h-full bg-cover" />
  );
}

const BaseWidget = ({ link, willSetLayoutId, name, component }) => {
  return (
    <div className="col-span-2 row-span-2 flex flex-col justify-evenly">
      <AnimationSquare
        willSetLayoutId={willSetLayoutId}
        link={link}
        borderRadius={12}
        className={"w-full h-full"}
      >
        {component}
      </AnimationSquare>
      <div className="text-xs text-center whitespace-nowrap truncate">{name}</div>
    </div>
  );
}
// ここまでウィジェットの内容


// 以下アイコンの内容
const TopIcon = ({ link, name, icon, willSetLayoutId }) => {
  return (
    <div className="col-span-1">
      <BaseIcon link={link} icon={icon} willSetLayoutId={willSetLayoutId} />
      <div className="text-xs text-center whitespace-nowrap truncate">{name}</div>
    </div>
  );
}

const BottomIcon = ({ link, icon, willSetLayoutId }) => {
  return (
    <div className="col-span-1 flex items-center">
      <BaseIcon link={link} icon={icon} willSetLayoutId={willSetLayoutId} />
    </div>
  );
}

const BaseIcon = ({ link, icon, willSetLayoutId }) => {
  return (
    <AnimationSquare
      willSetLayoutId={willSetLayoutId}
      link={link}
      borderRadius={12}
      className={"w-[84%] h-[84%] m-[8%]"}
    >
      <div style={{ backgroundImage: `url(${icon})` }} className="w-full h-full bg-cover" />
    </AnimationSquare>
  )
}
// ここまでアイコンの内容

const AnimationSquare = ({ willSetLayoutId, link, children, borderRadius, className }) => {
  const router = useRouter();
  const { bg, mode } = router.query;
  const [zIndex, setZIndex] = useState(0);
  return (
    <SquareContainer>
      <Link href={{ pathname: `/layout/ios/${link}/`, query: { mode: mode, bg: bg } }} style={{ zIndex: zIndex }} className="w-full h-full relative">
        <motion.div
          layoutId={willSetLayoutId && link}
          onLayoutAnimationStart={() => setZIndex(10)}
          onLayoutAnimationComplete={() => setZIndex(0)}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: borderRadius, position: "relative", overflow: "hidden" }}
          className={className}
        >
          {children}
        </motion.div>
        <motion.div
          layoutId={willSetLayoutId && link + "-filter"}
          style={{ borderRadius: borderRadius, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${className} bg-white absolute top-0 left-0`}
        />
      </Link>
    </SquareContainer>
  );
}


const SquareContainer = ({ children }) => {
  return (
    <div className="w-full pt-[100%] relative">
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}


const mainApps = [
  { "id": 1, "type": "widget", "link": "weather-widget", "name": "天気", "component": <WidgetWeather link="weather-widget" /> },
  { "id": 2, "type": "app", "link": "photos", "name": "写真", "icon": "/photos.png" },
  { "id": 3, "type": "app", "link": "reminder", "name": "リマインダー", "icon": "/reminders.png" },
  { "id": 4, "type": "app", "link": "shorcut", "name": "ショートカット", "icon": "/shortcuts.png" },
  { "id": 5, "type": "app", "link": "find", "name": "探す", "icon": "/find.png" },
  { "id": 6, "type": "app", "link": "line", "name": "LINE", "icon": "/line.png" },
  { "id": 7, "type": "app", "link": "youtube", "name": "YouTube", "icon": "/youtube.png" },
  { "id": 8, "type": "widget", "link": "photos-widget", "name": "写真", "component": <WigetPhotos link="photos-widget" /> },
  { "id": 9, "type": "app", "link": "apple-map", "name": "マップ", "icon": "/apple-map.png" },
  { "id": 10, "type": "app", "link": "stocks", "name": "株価", "icon": "/stocks.png" },
  { "id": 11, "type": "app", "link": "twitter", "name": "Twitter", "icon": "/twitter.png" },
  { "id": 12, "type": "app", "link": "google-maps", "name": "Google Maps", "icon": "/google-maps.png" },
  { "id": 13, "type": "app", "link": "instagram", "name": "Instagram", "icon": "/instagram.png" },
  { "id": 14, "type": "app", "link": "app-store", "name": "App Store", "icon": "/app-store.png" },
  { "id": 15, "type": "app", "link": "settings", "name": "設定", "icon": "/settings.png" },
  { "id": 16, "type": "app", "link": "camera", "name": "カメラ", "icon": "/camera.png" },
  { "id": 17, "type": "app", "link": "bg-seter", "name": "壁紙", "icon": "/home.png" }
]

const BottomApps = [
  { "id": 21, "type": "app", "link": "safari", "name": "Safari", "icon": "/safari.png" },
  { "id": 22, "type": "app", "link": "notes", "name": "メモ", "icon": "/notes.png" },
  { "id": 23, "type": "app", "link": "grageband", "name": "Grage Band", "icon": "/grageband.png" },
  { "id": 24, "type": "app", "link": "calculator", "name": "電卓", "icon": "/calculator.png" }
]
