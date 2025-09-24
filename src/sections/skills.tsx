import { softwareMap, languageMap } from "@/utils/image.utils";

interface GridShowcaseProps {
  header: string;
  imgArr: string[];
}

const GridShowcase: React.FC<GridShowcaseProps> = ({ header, imgArr }) => {
  return (
    <>
      <span className="karla-bold text-xl text-fuchsia-700">{header}</span>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 mb-15 mx-4 sm:mx-10 md:mx-50 mt-4">
        {imgArr.map((v) => (
          <div
            key={v}
            className="
        flex justify-center items-center rounded-full bg-fuchsia-900 
        w-20 h-20 sm:w-28 sm:h-28 md:w-35 md:h-35 
        p-4 sm:p-6 md:p-8 
        box-shadow
      "
          >
            <img
              className="object-scale-down w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20"
              src={v}
            />
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap justify-center gap-14 mb-15 md:mx-50 mt-4">
        {imgArr.map((v) => (
          <div
            key={v}
            className="p-8 rounded-[50%] bg-fuchsia-900 w-35 h-35 flex justify-center items-center box-shadow"
          >
            <img className="w-20 h-20 object-scale-down" src={v} />
          </div>
        ))}
      </div> */}
    </>
  );
};

const Skills = () => {
  const languageShowcase: GridShowcaseProps = {
    header: "Language & Frameworks",
    imgArr: Object.values(languageMap),
  };

  const softwareShowcase: GridShowcaseProps = {
    header: "Software & Applications",
    imgArr: Object.values(softwareMap),
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-4 mx-20"
      id={"skills"}
    >
      <h1 className="karla-bold text-4xl text-center">
        Skills <span className="text-fuchsia-600">&</span> Proficiency
      </h1>
      {/* Languages */}
      <GridShowcase {...languageShowcase} />
      <GridShowcase {...softwareShowcase} />
    </div>
  );
};
export default Skills;
