import Slideshow from "../components/slideshow";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <motion.div
        id="aboutme"
        className="text-center flex flex-col gap-3 mx-5 md:mx-40"
      >
        <motion.h1
          className="karla-bold text-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Aspiring Software Engineer
        </motion.h1>
        <motion.p
          className="karla-light-bold text-xl"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          From an early age, my enthusiasm for Information Technology has driven
          me to explore diverse technologies and refine a versatile skill set.
          As a committed team player, I consistently deliver my best work,
          fostering collaboration and supporting colleagues. With a strong
          attention to detail and a perfectionist approach, I strive for
          excellence in every aspect of my work.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Slideshow />
      </motion.div>
    </>
  );
};

export default AboutMe;
