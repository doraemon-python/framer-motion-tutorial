import MyLink from "@/components/myLink";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <MyLink href={"/"} text={"ホームへ"} />
      {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="w-11/12 h-64 my-4 px-2 mx-auto bg-white rounded-md border"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl font-bold">hello</h1>
          <p>In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu. Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi. Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        </motion.div>
      )}
    </>
  );
}

export default Index;