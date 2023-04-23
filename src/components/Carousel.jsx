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
    <div className="container mx-auto max-w-screen-xl">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={3}
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
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full rounded-2xl object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center swiper-controller">
        <div className="flex items-center gap-4">
          <button className="button-prev">
            <img src="/public/assets/icon/arrow-left.svg" alt="Previous Slide" className="w-8 h-8" />
          </button>
          <div className="pagination flex justify-around items-center gap-1"></div>
          <button className='button-next'>
            <img src="/public/assets/icon/arrow-right.svg" alt="Next Slide" className="w-8 h-8" />
        </button>
        </div>       
      </div>
    </div>
  );
}
