import { softwareMap, languageMap } from "@/utils/image.utils";

interface GridShowcaseProps {
  header: string;
  imgArr: string[];
}

const GridShowcase: React.FC<GridShowcaseProps> = ({ header, imgArr }) => {
  return (
    <>
      <span className="karla-bold text-xl text-fuchsia-700">{header}</span>
      <div className="flex flex-wrap justify-center gap-14 mb-15 mx-50 mt-4">
        {imgArr.map((v) => (
          <div
            key={v}
            className="p-8 rounded-[50%] bg-fuchsia-900 w-35 h-35 flex justify-center items-center box-shadow"
          >
            <img className="w-20 h-20 object-scale-down" src={v} />
          </div>
        ))}
      </div>
      {/* <div className="grid lg:grid-cols-5 gap-14 mb-15 md:grid-cols-3 sm:grid-cols-2 auto-cols-auto">
        {imgArr.map((v) => (
          <div className="p-8 rounded-[50%] bg-fuchsia-900 w-35 h-35 flex justify-center items-center box-shadow m-auto">
            <img
              className="w-20 h-20 object-scale-down"
              src={`${imgPath}/${v}.png`}
            />
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
      <h1 className="karla-bold text-4xl">
        Skills <span className="text-fuchsia-600">&</span> Proficiency
      </h1>
      {/* Languages */}
      <GridShowcase {...languageShowcase} />
      <GridShowcase {...softwareShowcase} />
    </div>
  );
};
export default Skills;
