import MyLink from "@/components/myLink";
import { motion } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const svgStyle = {
    open: { rotate: 135 },
    close: {},
  }

  const svgStyle2 = {
    open: { bottom: "4.5rem", right: "1rem", opacity: 1 },
    close: { bottom: "1rem", right: "1rem", opacity: 0 },
  }

  const svgStyle3 = {
    open: { bottom: "8rem", right: "1rem", opacity: 1 },
    close: { bottom: "1rem", right: "1rem", opacity: 0 },
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <MyLink href={"/"} text={"ホームへ"} />
      <motion.div
        onClick={handleClick}
        className="absolute bottom-4 right-4 w-12 h-12 p-2 rounded-full bg-blue-500 text-white z-10"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-full h-full"
          animate={isOpen ? "open" : "close"}
          variants={svgStyle}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </motion.svg>
      </motion.div>
      <motion.div
        className="absolute w-10 h-10 m-1 p-2 rounded-full bg-blue-400 text-white"
        initial={"close"}
        animate={isOpen ? "open" : "close"}
        variants={svgStyle2}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-full h-full"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute w-10 h-10 m-1 p-2 rounded-full bg-blue-400 text-white"
        initial={"close"}
        animate={isOpen ? "open" : "close"}
        variants={svgStyle3}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-full h-full"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </motion.div>
    </div >
  );
}

export default Index;