import { Images } from "../utils/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function ImgMobileStepper({ images }: { images: Images[] }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map(({ url }) => (
        <SwiperSlide>
          <img src={url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
