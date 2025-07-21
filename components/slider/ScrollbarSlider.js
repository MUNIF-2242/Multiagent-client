import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

const ScrollbarSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Pagination Scrollbar Swiper</h5>
        </div>
        <div className="panel-body">
          <Swiper
            scrollbar={{ hide: false }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Scrollbar, Autoplay]}
            className="pagination-scrollbar-swiper"
          >
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-9.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-10.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-1.jpg" alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ScrollbarSlider;
