import MyLink from "./myLink";

const Frame = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <MyLink href={"/"} text={"ホームへ"} />
      {children}
    </div>
  );
}

export default Frame;