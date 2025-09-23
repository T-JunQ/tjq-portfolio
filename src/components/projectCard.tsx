import { mainImageMap, languageMap, softwareMap } from "@/utils/image.utils";
import websiteImg from "../assets/website.png";

export interface ProjectCardProps {
  title: string;
  projectKey: string;
  desc: string;
  technologies: string[];
  pics?: string[];
  github?: string;
  website?: {
    url: string;
    title: string;
  };
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectKey,
  desc,
  technologies,
  pics,
  github,
  website,
  index,
}) => {
  const isEven = index && (index + 1) % 2 == 0;
  const cardBg = isEven
    ? `linear-gradient(
    180deg,
    rgba(68, 11, 128, 1) 0%,
    rgba(91, 1, 121, 1) 100%
    )`
    : `linear-gradient(180deg, rgba(58, 6, 114, 1) 0%, rgba(50, 45, 134, 1) 100%)`;

  return (
    <div
      className="rounded-[16px] relative flex flex-row p-8 gap-8 mt-10"
      style={{
        background: cardBg,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img
        className={`rounded-[16px] relative object-cover w-[360px] h-[360px] bg-white ${
          isEven && "order-3"
        }`}
        style={{
          boxShadow: `0px 5px 5px 1px rgba(0, 0, 0, 0.25)`,
        }}
        src={mainImageMap[projectKey]}
      />
      <div className="flex flex-col">
        <h1 className="karla-bold text-2xl">{title}</h1>
        <div className="karla-light text-[#D0D0D0] mt-2">{desc}</div>
        <div className="mt-3">
          <h2>Technologies used:</h2>
          <div className="flex flex-row gap-2">
            {technologies.map((technology) => (
              <div
                className="p-2 rounded-[50%] bg-fuchsia-900 w-10 h-10 box-shadow mt-2 flex justify-center items-center"
                style={{ boxShadow: ` 0px 4px 4px 0px rgba(0, 0, 0, 0.25)` }}
              >
                <img
                  className="object-scale-down"
                  src={
                    technology in languageMap
                      ? languageMap[technology]
                      : softwareMap[technology]
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-5">
          {Array.isArray(pics) &&
            pics.map((pic) => (
              <div className="relative w-[140px] h-[80px]">
                <img
                  className="w-full h-full object-contain rounded-2xl bg-fuchsia-950 drop-shadow-md"
                  src={pic}
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none" />
              </div>
            ))}
        </div>
        <div className="flex flex-row gap-3 mt-1">
          {github && (
            <a
              href={github}
              target="_blank"
              className="py-1.5 px-3 relative flex mt-4 bg-blue-700 rounded-[100px] items-center justify-evenly gap-1.5"
            >
              <div className="text-[#ffffff] text-left karla-bold text-base">
                GitHub
              </div>
              <img className="h-[18px] -mt-0.5" src={softwareMap["github"]} />
            </a>
          )}
          {website && (
            <a
              href={website.url}
              target="_blank"
              className="py-1.5 px-3 relative flex mt-4 bg-blue-700 rounded-[100px] items-center justify-evenly gap-1.5"
            >
              <div className="text-[#ffffff] text-left karla-bold text-base">
                {website.title}
              </div>
              <img className="h-[18px] -mt-0.5" src={websiteImg} />
            </a>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};
