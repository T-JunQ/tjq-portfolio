import AboutMe from "../sections/about-me";
import Intro from "../sections/intro";
import { Navigation } from "../types";

export const navConfig: Navigation[] = [
  { text: "Home", link: Intro.name },
  { text: "About Me", link: AboutMe.name },
  { text: "Projects", link: "" },
  { text: "Experiences", link: "" },
];
