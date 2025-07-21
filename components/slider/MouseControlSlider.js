import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

const MouseControlSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Mousewheel Control Swiper</h5>
        </div>
        <div className="panel-body">
          <div className="swiper-container mousewheel-control-swiper">
            <Swiper
              direction="vertical"
              loop={true}
              slidesPerView={1}
              mousewheel={true}
              pagination={{ clickable: true , dynamicBullets: true}}
              modules={[Mousewheel, Pagination]}
              style={{ height: '253.078px' }}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-5.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-6.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-7.jpg" alt="image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseControlSlider;
