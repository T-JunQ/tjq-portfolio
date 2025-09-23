import Divider from "./components/divider";
import Navbar from "./components/navbar";
import AboutMe from "./sections/about-me";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Intro from "./sections/intro";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import "./stars.css";

function App() {
  return (
    <>
      <div className="w-screen h-dvh z-10 relative">
        <Navbar />
        <Intro />
        <Divider /> {/* Divider */}
        <AboutMe />
        <Divider /> {/* Divider */}
        <Skills />
        <Divider /> {/* Divider */}
        <Experience />
        <Divider /> {/* Divider */}
        <Projects />
        <Divider /> {/* Divider */}
        <Education />
        <Footer />
      </div>
      <div className="bg-animation opacity-80 [&>div]:-z-10">
        <div id="stars"></div>
        <div id="stars2"></div>
      </div>
    </>
  );
}

export default App;
