import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="text-white karlas-light py-4 px-10 md:px-30 mt-10 flex justify-between w-screen bg-[#01013e] rounded-t-3xl"
    >
      <div className="text-left font-['Inria Sans', serif] text-xl inria-sans-bold">
        <span className="text-white">JQ</span>
        <span className="text-purple-400">.</span>
      </div>
      <div className="flex flex-col gap-3">
        <div>junqin05@gmail.com</div>
        <div className="flex flex-row gap-2">
          <a href="mailto:junqin05@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope" />
          </a>
          <a href="#" target="_blank">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="https://www.youtube.com/@guywithuniquename" target="_blank">
            <i className="fa-brands fa-youtube" />
          </a>
          <a
            href="https://www.linkedin.com/in/jun-qin-tan-576165238/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
