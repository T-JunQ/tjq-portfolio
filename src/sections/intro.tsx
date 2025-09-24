const Intro = () => {
  return (
    <div
      id={"intro"}
      className="Intro flex flex-col md:flex-row justify-center mt-15 items-center gap-10 md:gap-25 px-5"
    >
      <div className="kodchasan-bold text-white text-center text-5xl md:text-6xl md:text-left animate-float_in">
        Hello,
        <br /> Im <span className="animate-highlight">Jun Qin</span>
        <div className="font-['Karla', serif] text-xl mt-4">
          Fellow passionate developer invested in the field
        </div>
      </div>
      <img
        className="transform -scale-x-80 scale-y-80 animate-float_in"
        src="https://cdn-icons-png.flaticon.com/512/10740/10740609.png"
      />
    </div>
  );
};

export default Intro;
