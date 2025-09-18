interface GridShowcaseProps {
  header: string;
  imgPath: string;
  imgArr: string[];
}

const GridShowcase: React.FC<GridShowcaseProps> = ({
  header,
  imgPath,
  imgArr,
}) => {
  return (
    <>
      <span className="karla-bold text-xl text-fuchsia-700">{header}</span>
      <div className="grid lg:grid-cols-5 gap-14 mb-15 md:grid-cols-3 sm:grid-cols-2">
        {imgArr.map((v) => (
          <div className="p-8 rounded-[50%] bg-fuchsia-900 w-35 h-35 flex justify-center items-center box-shadow">
            <img
              className="w-20 h-20 object-scale-down"
              src={`${imgPath}/${v}.png`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Skills = () => {
  const languageShowcase: GridShowcaseProps = {
    header: "Language & Frameworks",
    imgPath: "../src/assets/languages",
    imgArr: [
      "react",
      "javascript",
      "typescript",
      "nodejs",
      "php",
      "sql",
      "csharp",
      "java",
      "asp",
      "python",
    ],
  };

  const softwareShowcase: GridShowcaseProps = {
    header: "Software & Applications",
    imgPath: "../src/assets/software",
    imgArr: [
      "vsstudio",
      "vscode",
      "android",
      "jira",
      "bitbucket",
      "figma",
      "microsoftsql",
      "unity",
      "davinci",
      "gm",
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mx-20">
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
