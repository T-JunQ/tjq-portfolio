import { ProjectCard, ProjectCardProps } from "@/components/projectCard";
import { importImages } from "@/utils/image.utils";

const projectList: ProjectCardProps[] = [
  {
    title: "TravelWise Android Application",
    projectKey: "travelwise",
    desc: `An all-in-one travel application released to the google play store as
          part of a polytechnic module, Mobile Application Development module. I
          took pivotal development on the Booking Accommodation, Nearby
          Recommendations and Favorites features for the application.`,
    pics: importImages(
      import.meta.glob("@/assets/projects/travelwise/pics/*.png", {
        eager: true,
      })
    ),
    technologies: ["android", "java"],
    github: "https://github.com/bingenk/MAD2023_Team2",
  },
  {
    title: "NeuroScape",
    projectKey: "neuroscape",
    desc: "A 2D sci-fi side-scrolling platformer as part of the Game Production module. Inspired by Blade-runner 2049 and Mirror's edge, players have to make their way to a laboratory to steal a cure for a virus while evading obstacles and enemies along the way.",
    technologies: ["gm"],
    pics: importImages(
      import.meta.glob("@/assets/projects/neuroscape/pics/*.png", {
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
    technologies: ["android", "java"],
    pics: importImages(
      import.meta.glob("@/assets/projects/quickconnect/pics/*.png", {
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
    technologies: ["html", "css", "javascript", "jquery"],
    pics: importImages(
      import.meta.glob("@/assets/projects/gamehub/pics/*.png", {
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
    technologies: ["html", "css", "javascript"],
    pics: importImages(
      import.meta.glob("@/assets/projects/rockstar/pics/*.png", {
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
  //   pics: importImages(
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

const Projects = () => {
  return (
    <div
      className="flex flex-col gap-3 mx-5 md:mx-38 items-center"
      id={"projects"}
    >
      <h1 className="karla-bold text-4xl">Project</h1>
      {projectList.map((project, i) => (
        <ProjectCard key={project.projectKey} {...project} index={i} />
      ))}
    </div>
  );
};

export default Projects;
