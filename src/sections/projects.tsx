interface Project {
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

const projectList: Project[] = [
  {
    title: "TravelWise Android Application",
    projectKey: "travelwise",
    desc: `An all-in-one travel application released to the google play store as
          part of a polytechnic module, Mobile Application Development module. I
          took pivotal development on the Booking Accommodation, Nearby
          Recommendations and Favorites features for the application.`,
    pics: Object.keys(
      import.meta.glob("/src/assets/projects/travelwise/pics/*.png", {
        eager: true,
      })
    ),
    technologies: [
      `../src/assets/software/android.png`,
      `../src/assets/languages/java.png`,
    ],
    github: "https://github.com/bingenk/MAD2023_Team2",
  },
  {
    title: "NeuroScape",
    projectKey: "neuroscape",
    desc: "A 2D sci-fi side-scrolling platformer as part of the Game Production module. Inspired by Blade-runner 2049 and Mirror's edge, players have to make their way to a laboratory to steal a cure for a virus while evading obstacles and enemies along the way.",
    technologies: ["../src/assets/software/gm.png"],
    pics: Object.keys(
      import.meta.glob("/src/assets/projects/neuroscape/pics/*.png", {
        eager: true,
      })
    ),
    github: "https://github.com/Praveen1e3r24/GPN_Project",
    website: {
      url: "",
      title: "Diary",
    },
  },
  {
    title: "OCBC QuickConnect",
    projectKey: "quickconnect",
    desc: "A mobile application prototype for submission to the ByteHackz Hackathon 2023. This was developed to tackle OCBC's problem statement of improving experience with customers' enquiries. The application includes a NLP that guides users to the most appropriate avenue",
    technologies: [
      "/src/assets/software/android.png",
      "/src/assets/languages/java.png",
    ],
    pics: Object.keys(
      import.meta.glob("/src/assets/projects/quickconnect/pics/*.png", {
        eager: true,
      })
    ),
    github: "https://github.com/Praveen1e3r24/QuickConnect",
    website: {
      url: "https://jqpfdblog.wordpress.com/",
      title: "DevBlog",
    },
  },
  {
    title: "GameHub Marketplace",
    projectKey: "gamehub",
    desc: "A fictional community game item marketplace developed for the Interactive Development module. The website would are able to buy,sell and overlook game items",
    technologies: [
      "/src/assets/languages/html.png",
      "/src/assets/languages/css.png",
      "/src/assets/languages/javascript.png",
      "/src/assets/languages/jquery.png",
    ],
    pics: Object.keys(
      import.meta.glob("/src/assets/projects/gamehub/pics/*.png", {
        eager: true,
      })
    ),
    github: "https://github.com/T-JunQ/Assignment-2",
    website: {
      url: "https://t-junq.github.io/Assignment-2/",
      title: "Website",
    },
  },
  {
    title: "Rockstar Website Redesign",
    projectKey: "rockstar",
    desc: "A redesign of Rockstar Games' website, as part of the Interactive Development module. The website explains what the company does and its reputation, and advertises its brand and games to visitors.",
    technologies: [
      "/src/assets/languages/html.png",
      "/src/assets/languages/css.png",
      "/src/assets/languages/javascript.png",
    ],
    pics: Object.keys(
      import.meta.glob("/src/assets/projects/rockstar/pics/*.png", {
        eager: true,
      })
    ),
    github: "https://github.com/T-JunQ/Assignment1",
    website: {
      url: "https://t-junq.github.io/Assignment1/",
      title: "Website",
    },
  },
  // {
  //   title: "",
  //   projectKey: "",
  //   desc: "",
  //   technologies: [""],
  //   pics: Object.keys(
  //     import.meta.glob("/src/assets/projects/neuroscape/pics/*.png", {
  //       eager: true,
  //     })
  //   ),
  //   github: "",
  //   website: {
  //     url: "",
  //     title: "",
  //   },
  // },
];

const ProjectCard: React.FC<Project> = ({
  title,
  projectKey,
  desc,
  technologies,
  pics,
  github,
  website,
  index,
}) => {
  console.log(index);
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
        src={"/src/assets/projects/" + projectKey + "/main.png"}
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
                <img className="object-scale-down" src={technology} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-5">
          {Array.isArray(pics) &&
            pics.map((pic) => (
              <div className="relative w-[140px] h-[80px]">
                <img
                  className="w-full h-full object-contain rounded-2xl bg-fuchsia-950"
                  src={pic}
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-[4px] border-[#240b54] pointer-events-none" />
              </div>
            ))}
        </div>
        <div className="flex flex-row gap-3 mt-1">
          {github && (
            <a
              href={github}
              className="py-1.5 px-3 relative flex mt-4 bg-blue-700 rounded-[100px] items-center justify-evenly gap-1.5"
            >
              <div className="text-[#ffffff] text-left karla-bold text-base">
                GitHub
              </div>
              <img
                className="h-[18px] -mt-0.5"
                src="/src/assets/software/github.png"
              />
            </a>
          )}
          {website && (
            <a
              href={website.url}
              className="py-1.5 px-3 relative flex mt-4 bg-blue-700 rounded-[100px] items-center justify-evenly gap-1.5"
            >
              <div className="text-[#ffffff] text-left karla-bold text-base">
                {website.title}
              </div>
              <img className="h-[18px] -mt-0.5" src="/src/assets/website.png" />
            </a>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-3 mx-38 items-center">
      <h1 className="karla-bold text-4xl mb-8">Projects</h1>
      {projectList.map((project, i) => (
        <ProjectCard key={project.projectKey} {...project} index={i} />
      ))}
    </div>
  );
};

export default Projects;
