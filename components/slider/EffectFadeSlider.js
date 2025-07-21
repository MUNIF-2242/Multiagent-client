import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const EffectFadeSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Effect Fade Swiper</h5>
        </div>
        <div className="panel-body">
          <div className="swiper-container effect-fade-swiper">
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              effect="fade"
              modules={[Autoplay, Pagination, EffectFade]}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-8.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-9.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-10.jpg" alt="image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectFadeSlider;
