import Image1 from '/assets/roadmap/roadmap_1.jpg'
import Image2 from '/assets/roadmap/roadmap_2.jpg'
import Image3 from '/assets/roadmap/roadmap_3.jpg'
import Image4 from '/assets/roadmap/roadmap_4.jpg'
import Image5 from '/assets/roadmap/roadmap_5.jpg'
import ImageMobile1 from '/assets/roadmap/roadmap_mobile_1.jpg'
import ImageMobile2 from '/assets/roadmap/roadmap_mobile_2.jpg'
import ImageMobile3 from '/assets/roadmap/roadmap_mobile_3.jpg'
import ImageMobile4 from '/assets/roadmap/roadmap_mobile_4.jpg'
import ImageMobile5 from '/assets/roadmap/roadmap_mobile_5.jpg'

import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination, Navigation } from "swiper"

const Roadmap = () => {
  return (
    <section id='roadmap' className='roadmap pt-3 pb-20'>
      <div className='container'>
        <div className="row pb-5">
          <div className="col text-center">
            <h1>ROADMAP</h1>
          </div>
        </div>
      </div>

      <style>{`
        .roadmap-item {
          width: 100vw;
          height: 115vh;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .roadmap-1 { background-image: url(${Image1.src}) }
        .roadmap-2 { background-image: url(${Image2.src}) }
        .roadmap-3 { background-image: url(${Image3.src}) }
        .roadmap-4 { background-image: url(${Image4.src}) }
        .roadmap-5 { background-image: url(${Image5.src}) }
        @media only screen and (max-width: 768px) {
          .roadmap-item { height: 50vh }
          .roadmap-1 { background-image: url(${ImageMobile1.src}) }
          .roadmap-2 { background-image: url(${ImageMobile2.src}) }
          .roadmap-3 { background-image: url(${ImageMobile3.src}) }
          .roadmap-4 { background-image: url(${ImageMobile4.src}) }
          .roadmap-5 { background-image: url(${ImageMobile5.src}) }
        }
      `}</style>

      <Swiper
        direction='horizontal'
        slidesPerView={1}
        spaceBetween={0}
        // pagination={{ clickable: true }}
        navigation={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='roadmap-item roadmap-1'></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='roadmap-item roadmap-2'></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='roadmap-item roadmap-3'></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='roadmap-item roadmap-4'></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='roadmap-item roadmap-5'></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Roadmap