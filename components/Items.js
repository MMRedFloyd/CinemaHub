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
          hide: true,
        }}
        style={{
          "--swiper-scrollbar-bottom": "30px",
          "--swiper-scrollbar-drag-bg-color": "rgb(20, 177, 169)",
          "--swiper-navigation-top-offset": "40%",
          "--swiper-navigation-sides-offset": "10px",
          "--swiper-navigation-color": "rgb(20, 177, 169)",
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={classes.swiper}
      >
        <div className={classes.itemsContainer}>
          {data.map((item) => (
            <SwiperSlide className={classes.swiperSlide}>
              <Link href={`${hrefProp}/${item.id}`}>
                <Item key={item.id} item={item} />
              </Link>
            </SwiperSlide>
          ))}
        </div>

        <div className={classes.itemContainer}>
          {data.map((item) => (
            <SwiperSlide className={classes.swiperSlide}>
              <Link href={`${hrefProp}/${item.id}`}>
                <Item key={item.id} item={item} />
                {/* <p className={classes.exploremore}>Explore more</p> */}
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
