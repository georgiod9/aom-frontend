import InstagramIcon from '/assets/footer/instagram.svg'
import TwitterIcon from '/assets/footer/twitter.svg'

import Image from 'next/image'
import PlaceholderImage from '/assets/team/placeholder.jpg'

import { FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'

import TEAM_DATA from './data'

const Team = () => {
  return (
    <section id='team' className='team py-5'>
      <div className='container'>
        <div className="row pb-5">
          <div className="col text-center">
            <h1>MEET THE BRAINS</h1>
          </div>
        </div>

        <div className='row pb-5'>
          <div className='col'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              freeMode={false}
              scrollbar={{
                // hide: true,
              }}
              modules={[Scrollbar, FreeMode]}
            >
              {TEAM_DATA.map((data, index) => (
                <SwiperSlide key={`aom_team_${index}`}>
                  <div className='team-member pb-4'>
                    <div className='image-and-title'>
                      <img
                        className='img-fluid rounded shadow-lg'
                        src={data.image?.default?.src || PlaceholderImage.src}
                        alt={`Art of Mob - ${data.name}`}
                      />
                      <div className='title'>
                        <h5>{data.name}</h5>
                      </div>

                      <div className='description'>
                        <h4>{data.description}</h4>
                      </div>
                    </div>

                    <div className='info'>
                      {data.twitterUrl && (
                        <a href={data.twitterUrl} alt={`Art of Mob - ${data.name} - Twitter`} target='_blank' rel="noreferrer">
                          <Image src={TwitterIcon} alt={`Art of Mob - ${data.name} - Twitter`} width={25} />
                        </a>
                      )}

                      {data.instagramUrl && (
                        <a href={data.instagramUrl} alt={`Art of Mob - ${data.name} - Instagram`} target='_blank' rel="noreferrer">
                          <Image src={InstagramIcon} alt={`Art of Mob - ${data.name} - Instagram`} width={25} />
                        </a>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Team