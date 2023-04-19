import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image_1 from '/public/assets/img/tranding-food-1.png';
import slide_image_2 from '/public/assets/img/tranding-food-2.png';
import slide_image_3 from '/public/assets/img/tranding-food-3.png';
import slide_image_4 from '/public/assets/img/tranding-food-4.png';
import slide_image_5 from '/public/assets/img/tranding-food-5.png';
import slide_image_6 from '/public/assets/img/tranding-food-6.png';
import slide_image_7 from '/public/assets/img/tranding-food-7.png';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const slideImages = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_6,
  slide_image_7,
];

export default function Carousel() {
  return (
    <div className="container mx-auto max-w-screen-xl py-16 px-4">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        initialSlide={3}
        slidesPerView="auto"
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
        className="swiper_container h-52rem"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full rounded-2xl object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler flex justify-center items-center absolute left-0 right-0 bottom-4">
        <button className="swiper-button-prev slider-arrow inline-flex items-center justify-center text-primary w-10 h-10">
          <img src="/public/assets/icon/arrow-left.svg" alt="Previous Slide" className="w-5 h-5" />
        </button>
        <div className="swiper-pagination mx-6"></div>
        <button className="swiper-button-next slider-arrow inline-flex items-center justify-center text-primary w-10 h-10">
          <img src="/public/assets/icon/arrow-right.svg" alt="Next Slide" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
