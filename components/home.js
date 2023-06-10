import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = ({ willSetLayoutId = true, shrink = false }) => {
  const [bg, setBg] = useState('/iphone-bg.png');
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-screen h-screen bg-cover bg-center bg-fixed overflow-scroll flex flex-col"
    >
      <TopBar />
      <motion.div
        initial={{ scale: shrink ? 1 : 0.8 }}
        animate={{ scale: shrink ? 0.8 : 1 }}
        className="w-full h-full flex flex-col duration-200"
      >
        <MainIcons willSetLayoutId={willSetLayoutId} setBg={setBg} />
        <BottomIconsBar willSetLayoutId={willSetLayoutId} />
      </motion.div>
      {/* opacity, transformが設定された要素は出る順にどれが上か決まる。 */}
      {/* Filterはこの中では一番上に表示させたいため、最後に配置する。 */}
      {shrink && <Filter />}
    </div>
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
      <div className="w-1/3 text-white flex justify-center items-center">{`${h}:${m}`}</div>
      <div className="w-1/3 px-3">
        <Link href={"/"} className="block h-full bg-black rounded-full" />
      </div>
      <div className="w-1/3 px-4 flex justify-around items-center text-white">
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

const MainIcons = ({ willSetLayoutId, setBg }) => {
  return (
    <div className="w-full flex-grow">
      <div className="w-[95%] mx-auto px-3 pt-6 grid grid-cols-4 gap-x-6 gap-y-4">
        {mainApps.map(item => {
          if (item.type === "app") {
            return <TopIcon key={item.id} willSetLayoutId={willSetLayoutId} link={item.link} name={item.name} icon={item.icon} />
          } else if (item.type === "widget") {
            return <BaseWidget key={item.id} willSetLayoutId={willSetLayoutId} name={item.name} component={item.component} />
          }
        })}
        <MySpecialApp setBg={setBg} />
      </div>
    </div>
  );
}

const BottomIconsBar = ({ willSetLayoutId }) => {
  return (
    <div className="w-full h-[12%] pb-3">
      <div className="w-[95%] h-full mx-auto px-3 rounded-3xl bg-white/20 backdrop-blur grid grid-cols-4 gap-6">
        {BottomApps.map(item => <BottomIcon key={item.id} willSetLayoutId={willSetLayoutId} link={item.link} icon={item.icon} />)}
      </div>
    </div>
  );
}

const Filter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen fixed bg-black" />
  );
}


// 以下ウィジェットの内容
const WidgetWeather = ({ link }) => {
  return (
    <Link href={`/layout/ios/${link}/`} className="w-full h-full px-5 py-3 flex flex-col justify-between rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div>
        <p className="text-lg">新宿区</p>
        <p className="text-5xl font-light">24°</p>
      </div>
      <div className="text-sm">
        <p>曇り時々晴れ</p>
        <p>最高:28° 最低:19°</p>
      </div>
    </Link>
  );
}

const WigetImage = ({ link }) => {
  return (
    <Link href={`/layout/ios/${link}/`} style={{ backgroundImage: "url(/mountain.jpg)" }} className="w-full h-full bg-cover rounded-2xl" />
  );
}

const BaseWidget = ({ name, component }) => {
  return (
    <div className="col-span-2 row-span-2 flex flex-col justify-evenly">
      <SquareContainer>
        {component}
      </SquareContainer>
      <div className="text-xs text-white text-center whitespace-nowrap truncate">{name}</div>
    </div>
  );
}
// ここまでウィジェットの内容


// 以下アイコンの内容
const TopIcon = ({ link, name, icon, willSetLayoutId }) => {
  return (
    <div className="col-span-1">
      <BaseIcon link={link} icon={icon} willSetLayoutId={willSetLayoutId} />
      <div className="text-xs text-white text-center whitespace-nowrap truncate">{name}</div>
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
  const [zIndex, setZIndex] = useState(0);
  return (
    <SquareContainer>
      <Link
        href={`/layout/ios/${link}/`}
        className="w-[85%] h-[85%]"
      >
        <motion.div
          layoutId={willSetLayoutId && link}
          onLayoutAnimationStart={() => setZIndex(100)}
          onLayoutAnimationComplete={() => setZIndex(0)}
          style={{ backgroundImage: `url(${icon})`, zIndex: zIndex }}
          className='w-full h-full rounded-[20%] bg-cover relative'
        />
      </Link>
    </SquareContainer>
  )
}

const MySpecialApp = ({ setBg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="col-span-1">
      <AnimatePresence>
        {isOpen && <motion.div
          onClick={handleClick}
          initial={{ backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" }}
          exit={{ backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
          className="w-screen h-screen fixed top-0 left-0 z-10"
        />}
      </AnimatePresence>
      <div className="w-full pt-[100%] relative">
        <BgSeter isOpen={isOpen} setIsOpen={setIsOpen} setBg={setBg} />
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div
            onClick={handleClick}
            style={{ backgroundImage: "url(/home.png)" }}
            className="w-[85%] h-[85%] bg-cover rounded-2xl z-10"
          />
        </div>
      </div>
      <div className="text-xs text-white text-center whitespace-nowrap truncate">壁紙</div>
    </div>
  );
}

const BgSeter = ({ isOpen, setIsOpen, setBg }) => {
  const handleClick1 = () => {
    setIsOpen(false);
    setBg("/iphone-bg.png");
  }
  const handleClick2 = () => {
    setIsOpen(false);
    setBg("/iphone-bg-2.jpg");
  }
  const handleClick3 = () => {
    setIsOpen(false);
    setBg("/iphone-bg-3.jpg");
  }
  const handleClick4 = () => {
    setIsOpen(false);
    setBg("/iphone-bg-4.jpg");
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, translateX: "-33.333%", translateY: "-50%" }}
          animate={{ opacity: 1, scale: 1, translateX: "-33.333%", translateY: "-100%" }}
          exit={{ opacity: 0, scale: 0, translateX: "-33.333%", translateY: "-50%" }}
          className="p-3 absolute top-0 left-0 w-[300%] bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden z-10"
        >
          <div
            onClick={handleClick1}
            className="flex justify-between items-center text-lg leading-10 text-white border-b"
          >
            <p>壁紙1</p>
            <Image style={{ width: 32, height: 32, borderRadius: 4 }} src={"/iphone-bg.png"} alt="img" width={32} height={32} />
          </div>
          <div
            onClick={handleClick2}
            className="flex justify-between items-center text-lg leading-10 text-white border-b"
          >
            <p>壁紙2</p>
            <Image style={{ width: 32, height: 32, borderRadius: 4 }} src={"/iphone-bg-2.jpg"} alt="img" width={32} height={32} />
          </div>
          <div
            onClick={handleClick3}
            className="flex justify-between items-center text-lg leading-10 text-white border-b"
          >
            <p>壁紙3</p>
            <Image style={{ width: 32, height: 32, borderRadius: 4 }} src={"/iphone-bg-3.jpg"} alt="img" width={32} height={32} />
          </div>
          <div
            onClick={handleClick4}
            className="flex justify-between items-center text-lg leading-10 text-white"
          >
            <p>壁紙4</p>
            <Image style={{ width: 32, height: 32, borderRadius: 4 }} src={"/iphone-bg-4.jpg"} alt="img" width={32} height={32} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// ここまでアイコンの内容


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
  { "id": 1, "type": "widget", "link": "weather", "name": "天気", "component": <WidgetWeather link="weather" /> },
  { "id": 2, "type": "app", "link": "photos", "name": "写真", "icon": "/photos.png" },
  { "id": 3, "type": "app", "link": "reminder", "name": "リマインダー", "icon": "/reminders.png" },
  { "id": 4, "type": "app", "link": "shorcut", "name": "ショートカット", "icon": "/shortcuts.png" },
  { "id": 5, "type": "app", "link": "find", "name": "探す", "icon": "/find.png" },
  { "id": 6, "type": "app", "link": "line", "name": "LINE", "icon": "/line.png" },
  { "id": 7, "type": "app", "link": "youtube", "name": "YouTube", "icon": "/youtube.png" },
  { "id": 8, "type": "widget", "link": "photos", "name": "写真", "component": <WigetImage link="photos" /> },
  { "id": 9, "type": "app", "link": "apple-map", "name": "マップ", "icon": "/apple-map.png" },
  { "id": 10, "type": "app", "link": "stocks", "name": "株価", "icon": "/stocks.png" },
  { "id": 11, "type": "app", "link": "twitter", "name": "Twitter", "icon": "/twitter.png" },
  { "id": 12, "type": "app", "link": "google-maps", "name": "Google Maps", "icon": "/google-maps.png" },
  { "id": 13, "type": "app", "link": "instagram", "name": "Instagram", "icon": "/instagram.png" },
  { "id": 14, "type": "app", "link": "app-store", "name": "App Store", "icon": "/app-store.png" },
  { "id": 15, "type": "app", "link": "settings", "name": "設定", "icon": "/settings.png" },
  { "id": 16, "type": "app", "link": "camera", "name": "カメラ", "icon": "/camera.png" },
]

const BottomApps = [
  { "id": 21, "type": "app", "link": "safari", "name": "Safari", "icon": "/safari.png" },
  { "id": 22, "type": "app", "link": "notes", "name": "メモ", "icon": "/notes.png" },
  { "id": 23, "type": "app", "link": "grageband", "name": "Grage Band", "icon": "/grageband.png" },
  { "id": 24, "type": "app", "link": "calculator", "name": "電卓", "icon": "/calculator.png" }
]
