import TimelineItem from "@/components/timelineItem";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  title: string;
  period: string;
  logo: string;
  jobDesc: string;
  achievements: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "Document Assistant",
    period: "Dec 2021 — Jan 2021",
    logo: "ironmountain",
    jobDesc: "Managed sensitive warehouse documents for deliveries and storage",
    achievements: `Assisted in sorting and locating crucial documents for various clients,Facilitated the delivery of confidential items to high-level clientele`,
  },
  {
    title: "OCBC Ignite Internship",
    period: "Mar 2024 — Mar 2025",
    logo: "ocbc",
    jobDesc:
      "Key role in developing and maintaining features of the OCBC Digital app, and innovating several banking solution prototypes",
    achievements: `Refurbished UI/UX and server interactions of application features,
    Supported production release of various updated features,
    Created crucial core utilities and components employed throughout the system,
    Ideate and fabricated gameified banking solutions approved by higher management`,
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // -1 = not started
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView && activeIndex === -1) {
      setActiveIndex(0); // start sequence when container enters view
    }
  }, [isInView, activeIndex]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-3 md:mx-20"
      id={"experience"}
    >
      <h1 className="karla-bold text-4xl self-center text-center">
        Work Experience
      </h1>
      <div className="mx-auto my-5 p-5 relative">
        <div className="flex flex-col relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              isLastItem={index !== timelineData.length - 1}
              isActive={index === activeIndex}
              onDone={() => setActiveIndex((prev) => prev + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
