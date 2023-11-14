import Item from "./Item";
import classes from "./Items.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Items.module.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

export default function Items({ data, hrefProp }) {
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
              <Link href={"872585"}>
                <Item key={item.id} item={item} />
              </Link>
            </SwiperSlide>
          ))}
        </div>
        <SwiperSlide className={classes.swiperSlide}>
          <Link href={`${hrefProp}`}>
            <div className={classes.itemContainer}>
              <p className={classes.exploremore}>Explore more</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
