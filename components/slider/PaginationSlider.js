import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const PaginationSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Pagination Swiper</h5>
        </div>
        <div className="panel-body">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            modules={[Pagination, Autoplay]}
            className="pagination-swiper"
          >
            <SwiperSlide>
              <img src="assets/images/slider-7.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/slider-8.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/images/slider-9.jpg" alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PaginationSlider;
