import Item from "./Item";
import classes from "./Items.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function Items({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        slidesPerGroup={5}
        grabCursor={true}
        keyboard={{
          enabled: false,
        }}
        breakpoints={{
          769: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        scrollbar={{
          enabled: true,
          hide: false,
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={classes.swiper}
      >
        <div className={classes.itemsContainer}>
          {data.map((item) => (
            <SwiperSlide className={classes.swiperSlide}>
              <Item key={item.id} item={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
