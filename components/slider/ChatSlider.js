import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { membersData } from '@/data/Data';
  
const ChatSlider = () => {
  const [slides, setSlides] = useState(0);

  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 468
        ? 7
        : window.innerWidth <= 575
        ? 8
        : window.innerWidth <= 768
        ? 6
        : window.innerWidth <= 1000
        ? 6
        : window.innerWidth > 1000
        ? 6
        : 0
    );
  };

  useEffect(() => {
    //Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listener on component mount
    window.addEventListener("resize", setSlidesPerview);

    // Remove the listener when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={slides}
        navigation={{
          prevEl: '.owl-prev',
          nextEl: '.owl-next',
        }}
        effect={'slide'}
        spaceBetween={5}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="active-members owl-carousel"
      >
        {membersData.map((item) => (
            <SwiperSlide className="single-member" key={item.id}>
                <button className="btn-flush avatar">
                    <img src={item.imgSrc} alt="User"/>
                    <span className="active-status active"></span>
                </button>
            </SwiperSlide>
        ))}
        

        <div className='owl-nav'>
            <button type="button" role="presentation" className="owl-prev">
                <i className="fa-light fa-angle-left"></i>
            </button>
            <button type="button" role="presentation" className="owl-next">
                <i className="fa-light fa-angle-right"></i>
            </button> 
        </div>
      </Swiper>      
      
    </div>
  );
}

export default ChatSlider;
