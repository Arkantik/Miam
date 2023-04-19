import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '/public/assets/img/tranding-food-1.png';
import slide_image_2 from '/public/assets/img/tranding-food-1.png';
import slide_image_3 from '/public/assets/img/tranding-food-1.png';
import slide_image_4 from '/public/assets/img/tranding-food-1.png';
import slide_image_5 from '/public/assets/img/tranding-food-1.png';
import slide_image_6 from '/public/assets/img/tranding-food-1.png';
import slide_image_7 from '/public/assets/img/tranding-food-1.png';

export default function Carousel() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
            <img src="/public/assets/icon/arrow-left.svg" className="w-5 h-5 swiper-button-prev slider-arrow" name="arrow-back-outline" />
            <img src="/public/assets/icon/arrow-right.svg" className="w-5 h-5 swiper-button-next slider-arrow" name="arrow-forward-outline" />
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

