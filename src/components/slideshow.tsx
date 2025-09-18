import { importImages } from "@/utils/image.utils";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";

const slideshowImgs = importImages(
  import.meta.glob("@/assets/slideshow-images/*.{png,jpg,jpeg,svg}", {
    eager: true,
  })
);

const SlideshowNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns flex justify-between absolute top-[50%] w-[95%] z-10">
      <button
        className="bg-[#4f125c] rounded-[50%] py-2 px-4"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <i className="fa-solid fa-chevron-left text-white"></i>
      </button>
      <button
        className="bg-[#4f125c] rounded-[50%] py-2 px-4"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <i className="fa-solid fa-chevron-right text-white"></i>
      </button>
    </div>
  );
};

const Slideshow = () => {
  return (
    <Swiper
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 220,
        modifier: 2,
        slideShadows: true,
      }}
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      autoplay
      draggable
      modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
      centeredSlides
      className="mySwiper my-30 w-[85%] relative"
    >
      {slideshowImgs.map((img) => (
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
      ))}
      <SlideshowNavButtons />
    </Swiper>
  );
};

export default Slideshow;
