import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-creative';

const EffectCreativeSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Effect Creative Swiper</h5>
        </div>
        <div className="panel-body">
          <div className="swiper-container effect-creative-swiper">
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-100%', 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ['100%', 0, -500],
                },
              }}
              modules={[Autoplay, Pagination, EffectCreative]}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-4.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-5.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-6.jpg" alt="image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectCreativeSlider;
