// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import CoursesCart from './CoursesCart'
// import required modules
import { FreeMode, Pagination } from "swiper";

export default function CourseSwaiper() {
    SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide style={{marginLeft:'12px'}}> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
        <SwiperSlide> <CoursesCart/> </SwiperSlide>
      </Swiper>
    </>
  );
}
