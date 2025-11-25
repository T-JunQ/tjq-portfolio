import { motion } from "motion/react";
import { navConfig } from "../configs/navConfig";

const Navbar = () => {
  return (
    <motion.div
      className="w-screen flex items-center justify-between p-3 md:px-12 z-20 overflow-y-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(47, 71, 222, 0.15) 10%,rgba(109, 119, 186, 0.05) 100%)",
        boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(5px)",
      }}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <a
        href="#"
        className="text-left font-['Inria Sans', serif] text-xl inria-sans-bold "
      >
        <span className="text-white">JQ</span>
        <span className="text-purple-400">.</span>
      </a>
      <div className="flex-row gap-10 hidden md:flex">
        {navConfig.map((v, i) => (
          <a
            href={v.link}
            key={i}
            className="text-[#ffffff] font-['Inter', serif] font-light "
          >
            {v.text}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
