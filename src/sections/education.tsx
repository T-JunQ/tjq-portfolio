import { educationMap } from "@/utils/image.utils";

const EduationData = [
  {
    title: "Gan Eng Seng Primary School",
    period: "Jan 2012 - Dec 2017",
    image: "gesps",
  },
  {
    title: "Queenstown Secondary School",
    period: "Jan 2018 - Dec 2021",
    image: "qtss",
  },
  {
    title: "Ngee Ann Polytechnic",
    period: "Apr 2022 - Apr 2025",
    desc: "Diploma in Information Technology",
    image: "np",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-3 mx-20" id={"education"}>
      <h1 className="karla-bold text-4xl self-center mb-10">Education</h1>
      <div className={`relative flex flex-col mx-auto`}>
        {EduationData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className="relative max-w-[1000px]">
              <div
                className={`absolute top-0 -bottom-5 left-1/2 border-[4px] border-fuchsia-900 rounded-full`}
              />
              {/* Card content */}
              <div
                className={`flex flex-col gap-1 p-4 text-white rounded-lg bg-[#2B1E4A] my-10 ${
                  isEven ? "mr-120 self-end" : "ml-120 self-start"
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
              </div>
              {/* Dotted Line */}
              <div
                className={`absolute bottom-[48.8%] border-t-5 border-dotted border-fuchsia-700 w-20 -z-10 ${
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
