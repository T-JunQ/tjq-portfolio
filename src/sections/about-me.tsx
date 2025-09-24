import Slideshow from "../components/slideshow";

const AboutMe = () => {
  return (
    <>
      <div
        id="aboutme"
        className="text-center flex flex-col gap-3 mx-5 md:mx-40"
      >
        <h1 className="karla-bold text-4xl">Aspiring Software Engineer</h1>
        <p className="karla-light-bold text-xl">
          From an early age, my enthusiasm for Information Technology has driven
          me to explore diverse technologies and refine a versatile skill set.
          As a committed team player, I consistently deliver my best work,
          fostering collaboration and supporting colleagues. With a strong
          attention to detail and a perfectionist approach, I strive for
          excellence in every aspect of my work.
        </p>
      </div>
      <Slideshow />
    </>
  );
};

export default AboutMe;
