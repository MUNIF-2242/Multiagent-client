import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const NavigationSlider = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Navigation Swiper</h5>
        </div>
        <div className="panel-body">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            navigation={{
              prevEl: "btn btn-sm btn-icon btn-primary swiper-button-next custom-next-button",
              nextEl: "btn btn-sm btn-icon btn-primary swiper-button-prev custom-prev-button",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            className="navigation-swiper"
            modules={[Navigation, Autoplay]}
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
            <div className="btn btn-sm btn-icon btn-primary swiper-button-next" role='button' onClick={goNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="btn btn-sm btn-icon btn-primary swiper-button-prev" role='button' onClick={goPrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NavigationSlider;
