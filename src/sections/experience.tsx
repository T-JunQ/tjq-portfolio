import { organisationMap } from "@/utils/image.utils";

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
  return (
    <div className="flex flex-col gap-3 md:mx-20" id={"experience"}>
      <h1 className="karla-bold text-4xl self-center text-center">
        Work Experience
      </h1>

      <div className="mx-auto my-5 p-5 relative">
        <div className="flex flex-col relative">
          {timelineData.map((item, index) => {
            const isEven = (index + 1) % 2 === 0;
            return (
              <div
                key={index}
                className={`relative max-w-[700px] ${
                  isEven
                    ? "pr-10 md:pr-35 self-end"
                    : "pl-10 md:pl-35 self-start"
                } py-8`}
              >
                {/* Start Dot */}
                <div
                  className={`absolute w-6 h-6 bg-fuchsia-600 rounded-full top-0 -left-[9px] ${
                    index !== 0 && "hidden"
                  }`}
                ></div>
                {/* Timeline line */}
                <div
                  className={`-z-10 absolute top-0 -bottom-1 w-1 border-[6px] border-fuchsia-900 rounded-full  
                    ${isEven ? "right-0 border-l-0" : "left-0 border-r-0"}
                    ${index === 0 ? "border-t-0 rounded-t-none" : ""}
                  `}
                />
                {/* Card content */}
                <div
                  className="flex flex-col bg-[#160147] text-white rounded-lg mt-10 mb-5 z-10"
                  style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
                >
                  <div
                    className={`relative bg-[#2B1E4A] rounded-lg py-4 px-6 flex flex-col gap-1`}
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div className="inline-flex justify-between">
                      <h1 className="karla-bold text-xl">{item.title}</h1>
                      <div className="bg-white rounded-full flex justify-center items-center p-2 w-20 h-6 mt-0.5">
                        <img
                          className="object-contain"
                          src={organisationMap[item.logo]}
                        />
                      </div>
                    </div>
                    <p className="font-light">{item.period}</p>
                    <p className="text-sm">{item.jobDesc}</p>
                  </div>
                  <div className="mt-2 text-sm leading-relaxed px-6 py-2 mb-1">
                    Achievements: <br />
                    <ul className="list-disc ml-5">
                      {item.achievements.split(",").map((achievement, idx) => (
                        <li key={idx} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dotted Line */}
                  <div
                    className={`absolute bottom-[48.8%] border-t-5 border-dotted border-fuchsia-700 w-28 -z-10 ${
                      isEven ? "right-5" : "left-5"
                    }`}
                  />
                  {/* Dot */}
                  <span
                    className={`absolute w-4 h-4 bg-fuchsia-600 rounded-full top-1/2 -translate-y-1/2 ${
                      isEven ? "-right-[5.2px]" : "-left-[5.2px]"
                    }`}
                  ></span>
                </div>
                {/* Horizontal connector line */}
                <div
                  className={`absolute top-0 h-1.5 bg-fuchsia-900 w-full rounded-full ${
                    isEven ? "right-0" : "left-0"
                  } ${index === 0 ? "hidden" : ""}`}
                ></div>
                {/* Dot */}
                <div
                  className={`absolute w-6 h-6 bg-fuchsia-600 rounded-full -bottom-4 -right-[9px] z-10 ${
                    index !== timelineData.length - 1 && "hidden"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
