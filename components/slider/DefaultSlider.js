import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'
const DefaultSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Default Swiper</h5>
            </div>
            <div className="panel-body">
                <Swiper 
                slidesPerView={1}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="default-swiper"
                >
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/slider-1.jpg" alt="image"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/slider-2.jpg" alt="image"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/images/slider-3.jpg" alt="image"/>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default DefaultSlider