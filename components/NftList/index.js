import Nfts from '/assets/nfts'
import { splitArrayToChunks } from '/helpers/ArrayHelper'

import { FreeMode, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'


const NftList = () => {
  const data = splitArrayToChunks(Nfts.images)

  return (
    <section id='collection' className='meet-the-mobsters pt-20'>
      <div className='container'>
        <div className="row pb-5">
          <div className="col text-center">
            <h1>MEET THE MOBSTERS</h1>
          </div>
        </div>
      </div>


      <div className="container-fluid description">
        <div className='row d-flex'>
          <div className="col-md-6 offset-md-3 text-center justify-content-center align-items-center d-flex flex-column">
            <h4>All mobsters are equal, but some are more equal than others. Cherry-picked from over a billion combinations, most are badass, some are lavish, and few are iconic!</h4>
            <h4>Blood makes you related, loyalty makes you family. When you HODL a mobster, you hold power backed by thousands of family members.</h4>
          </div>
        </div>

        <div className='row pt-10'>
          <div className='col'>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                768: {
                  slidesPerView: 8,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 8,
                  spaceBetween: 30,
                },
              }}
              freeMode={true}
              loop
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 800,
                disableOnInteraction: false,
                waitForTransition: false,
              }}
            >
              {Nfts.images.map((nft, index) => (
                <SwiperSlide key={`aom_nft_${index}`}>
                  <img className='img-fluid rounded shadow-lg mb-4' src={nft.src} alt='Art of Mob - nfts' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </section >
  )
}

export default NftList