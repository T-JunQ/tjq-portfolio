import { motion } from "motion/react";

const Intro = () => {
  return (
    <div
      id={"intro"}
      className="Intro flex flex-col md:flex-row justify-center mt-15 items-center gap-10 md:gap-25 px-5"
    >
      <motion.div
        className="kodchasan-bold text-white text-center text-5xl md:text-6xl md:text-left "
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Hello,
        <br /> Im <span className="animate-highlight">Jun Qin</span>
        <div className="font-['Karla', serif] text-xl mt-4">
          Fellow passionate developer invested in the field
        </div>
      </motion.div>
      <motion.img
        className="transform -scale-x-80 scale-y-80 md:-scale-x-100 md:scale-y-100 "
        src="https://cdn-icons-png.flaticon.com/512/10740/10740609.png"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default Intro;
