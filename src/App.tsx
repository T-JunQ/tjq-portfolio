import Divider from "./components/divider";
import Navbar from "./components/navbar";
import AboutMe from "./sections/about-me";
import Intro from "./sections/intro";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

function App() {
  return (
    <>
      <div className="w-screen h-dvh">
        <Navbar />
        <Intro />
        <Divider /> {/* Divider */}
        <AboutMe />
        <Divider /> {/* Divider */}
        <Skills />
        <Divider /> {/* Divider */}
        <Projects />
      </div>
    </>
  );
}

export default App;
