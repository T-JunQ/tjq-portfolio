const Intro = () => {
  return (
    <div
      id={"Intro"}
      className="Intro flex flex-row justify-center mt-15 items-center gap-25 px-5"
    >
      <div className="kodchasan-bold text-white text-6xl animate-float_in">
        Hello,
        <br /> Im <span className="animate-highlight">Jun Qin</span>
        <div className="font-['Karla', serif] text-xl mt-4">
          Fellow passionate developer invested in the field
        </div>
      </div>
      <img
        className="transform -scale-x-100 animate-float_in"
        src="https://cdn-icons-png.flaticon.com/512/10740/10740609.png"
      />
    </div>
  );
};

export default Intro;
