import { educationMap } from "@/utils/image.utils";
import { motion } from "motion/react";

const EduationData = [
  {
    title: "Ngee Ann Polytechnic",
    period: "Apr 2022 - Apr 2025",
    desc: "Diploma in Information Technology",
    image: "np",
  },
  {
    title: "Queenstown Secondary School",
    period: "Jan 2018 - Dec 2021",
    desc: "CCAs: Infocomm Club",
    image: "qtss",
  },
  {
    title: "Gan Eng Seng Primary School",
    period: "Jan 2012 - Dec 2017",
    desc: "CCAs: Infocomm Club, Choir",
    image: "gesps",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-3 mx-5 md:mx-20" id={"education"}>
      <h1 className="karla-bold text-4xl self-center mb-10">Education</h1>
      <div className={`relative flex flex-col mx-auto mb-30`}>
        {EduationData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="relative max-w-[1000px]">
              <motion.div
                initial={{ opacity: 0, scaleY: 0, originY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index - 1,
                }}
                viewport={{ once: true }}
                className={`absolute top-0 -bottom-5 left-1/2 border-[4px] border-blue-900 rounded-full -z-10`}
              />
              {/* Card content */}
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.1 + (index - 1),
                }}
                viewport={{ once: true }}
                className={`flex flex-col gap-1 p-4 text-white rounded-lg bg-[#2B1E4A] my-10 ${
                  isEven ? "md:mr-120 self-end" : "md:ml-120 self-start"
                }`}
                style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex justify-between gap-2">
                  <div>
                    <h1 className="karla-bold text-xl">{item.title}</h1>
                    {item.desc && <div>{item.desc}</div>}
                    <div>{item.period}</div>
                  </div>
                  <img
                    className="object-contain w-8 h-8"
                    src={educationMap[item.image]}
                  />
                </div>
              </motion.div>
              {/* Dotted Line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.1 + (index - 1),
                }}
                viewport={{ once: true }}
                className={`absolute bottom-[48.8%] border-t-5 border-dotted border-blue-900 w-20 -z-10 ${
                  isEven ? "right-[50%]" : "left-[51%]"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
