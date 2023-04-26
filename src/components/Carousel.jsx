import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import recipesData from "../data/data-recipes";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Carousel() {
  const slideImages = recipesData.slice(0,7).map(({ src, name }) => ({ src, name }));

  return (
    <div className="container mx-auto max-w-screen-xl">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={4}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        pagination={{ el: '.pagination', clickable: true }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
          clickable: true,
        }}
        className="swiper_container h-52rem"
      >
        {slideImages.map(({ src, name }, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={name} />
            <figcaption className="absolute bottom-8 w-full text-center text-xl text-dark bg-white/30 rounded-b-2xl py-2">{name}</figcaption>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center swiper-controller">
        <div className="flex items-center gap-4">
          <button className="button-prev">
            <img src="./assets/icon/arrow-left.svg" alt="Previous Slide" className="w-8 h-8" />
          </button>
          <div className="pagination flex justify-around items-center gap-1"></div>
          <button className='button-next'>
            <img src="./assets/icon/arrow-right.svg" alt="Next Slide" className="w-8 h-8" />
        </button>
        </div>       
      </div>
    </div>
  );
}
