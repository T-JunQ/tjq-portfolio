const Footer = () => {
  return (
    <div className="text-white karlas-light py-4 px-30 mt-10 flex justify-between w-screen bg-[#01013e] rounded-t-3xl">
      <div className="text-left font-['Inria Sans', serif] text-xl inria-sans-bold">
        <span className="text-white">JQ</span>
        <span className="text-purple-400">.</span>
      </div>
      <div className="flex flex-col gap-3">
        <div>junqin05@gmail.com</div>
        <div className="flex flex-row gap-2">
          <a href="mailto:junqin05@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope" />
          </a>
          <a href="#" target="_blank">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="https://www.youtube.com/@guywithuniquename" target="_blank">
            <i className="fa-brands fa-youtube" />
          </a>
          <a
            href="https://www.linkedin.com/in/jun-qin-tan-576165238/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
