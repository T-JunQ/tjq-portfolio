import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "motion/react";
import { organisationMap } from "@/utils/image.utils";

export interface TimelineItemProps {
  title: string;
  period: string;
  logo: string;
  jobDesc: string;
  achievements: string;
  index?: number;
  isLastItem?: boolean;
}

const TimelineItem: React.FC<
  TimelineItemProps & {
    isActive: boolean;
    onDone: () => void;
  }
> = ({
  title,
  period,
  logo,
  jobDesc,
  achievements,
  index,
  isLastItem,
  isActive,
  onDone,
}) => {
  const isEven = index && (index + 1) % 2 === 0;
  const isFirst = index === 0;
  const vertLine = useAnimation();
  const horiLine = useAnimation();
  const dot = useAnimation();
  const dottedLine = useAnimation();
  const card = useAnimation();

  const containerRef = useRef(null);

  useEffect(() => {
    async function runSequence() {
      if (!isActive) return;
      await horiLine.start({ opacity: 1, scaleX: 1 });
      await vertLine.start({ opacity: 1, scaleY: 1 });
      await dot.start({ opacity: 1, y: 0 });
      await dottedLine.start({ opacity: 1, scaleX: 1 });
      await card.start({ opacity: 1, y: 0 });
      onDone(); // signal parent to start next item
    }
    runSequence();
  }, [card, dot, dottedLine, horiLine, isActive, onDone, vertLine]);

  return (
    <div
      key={index}
      className={`relative max-w-[700px] ${
        isEven ? "pr-10 md:pr-35 self-end" : "pl-10 md:pl-35 self-start"
      } py-8`}
      ref={containerRef}
    >
      {/* Start Dot */}
      <div
        className={`absolute w-6 h-6 bg-fuchsia-600 rounded-full top-0 -left-[9px] ${
          index !== 0 && "hidden"
        }`}
      ></div>
      {/* Timeline line */}
      <motion.div
        className={`-z-10 absolute top-0 -bottom-1 w-1 border-[6px] border-fuchsia-900 rounded-full  
                    ${isEven ? "right-0 border-l-0" : "left-0 border-r-0"}
                    ${isFirst && "border-t-0 rounded-t-none"}
                  `}
        initial={{ opacity: 0, scaleY: 0, originY: 0 }}
        animate={vertLine}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Dotted line */}
      <motion.div
        className={`absolute bottom-[50%] border-t-5 border-dotted border-fuchsia-700 w-28 -z-10 ${
          isEven ? "right-5" : "left-5"
        }`}
        initial={{ opacity: 0, originX: isEven ? 1 : 0, scaleX: 0 }}
        animate={dottedLine}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Dot */}
      <motion.span
        className={`absolute w-4 h-4 bg-fuchsia-600 rounded-full top-[48%] ${
          isEven ? "-right-[5.2px]" : "-left-[5.2px] -translate-y-1"
        }`}
        initial={{ opacity: 0, y: 8 }}
        animate={dot}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Card content */}
      <motion.div
        className="flex flex-col bg-[#160147] text-white rounded-lg mt-10 mb-10 z-10"
        style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={card}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div
          className={`relative bg-[#2B1E4A] rounded-lg py-4 px-6 flex flex-col gap-1`}
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="inline-flex justify-between">
            <h1 className="karla-bold text-xl">{title}</h1>
            <div className="bg-white rounded-full flex justify-center items-center p-2 w-20 h-6 mt-0.5">
              <img className="object-contain" src={organisationMap[logo]} />
            </div>
          </div>
          <p className="font-light">{period}</p>
          <p className="text-sm">{jobDesc}</p>
        </div>
        <div className="mt-2 text-sm leading-relaxed px-6 py-2 mb-1">
          Achievements: <br />
          <ul className="list-disc ml-5">
            {achievements.split(",").map((achievement, idx) => (
              <li key={idx} className="mb-1">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      {/* Horizontal connector line */}
      <motion.div
        className={`absolute top-0 h-1.5 bg-fuchsia-900 w-full rounded-full ${
          isEven ? "right-0" : "left-0"
        } ${index === 0 ? "hidden" : ""}`}
        initial={{ opacity: 0, originX: isEven ? 0 : 1, scaleX: 0 }}
        animate={horiLine}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      {/* Dot */}
      <motion.div
        className={`absolute w-6 h-6 bg-fuchsia-600 rounded-full -bottom-4 -right-[9px] z-10 ${
          isLastItem && "hidden"
        }`}
        initial={{ opacity: 0, y: 8 }}
        animate={dot}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default TimelineItem;
