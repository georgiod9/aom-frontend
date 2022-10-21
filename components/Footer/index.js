import JoinTheMobmint from '/assets/footer/join-the-mobmint.png'
import JoinDiscord from '/assets/footer/join-discord.png'
import Instagram from '/assets/footer/instagram.svg'
import Twitter from '/assets/footer/twitter.svg'

import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className='footer py-20'>
        <div className='container h-100'>
          <div className='row'>
            <div className='col-md-4'>
              <Image src={JoinTheMobmint} alt='Join the MOBMINT' />
            </div>
          </div>

          <div className='row pt-5'>
            <div className='col-12 col-md-6'>
              <div className='col-12 text-center text-sm-center text-md-start'>
                <a className='pe-3' href='https://www.instagram.com/artofmobnft' target='_blank' rel="noreferrer">
                  <Image width={30} height={30} src={Instagram} alt='Art of Mob - Instagram' />
                </a>

                <a href='https://twitter.com/artofmob' target='_blank' rel="noreferrer">
                  <Image width={30} height={30} src={Twitter} alt='Art of Mob - Twitter' />
                </a>
              </div>

              <div className='col-12 text-center text-sm-center text-md-start'>
                <a className='email' href='mailto:contact@artofmob.io'>
                  <p className='p-0 m-0 pt-2'>
                    contact@artofmob.io
                  </p>
                </a>
              </div>
            </div>

            <div className='col-12 col-md-6 text-center text-md-end'>
              <a href='https://discord.gg/artofmob' target='_blank' rel="noreferrer">
                <img src={JoinDiscord.src} alt='Join us on Discord' height={80} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className='copyright mt-n5 mx-5'>
        <div className='row'>
          <div className='col text-center text-sm-center text-md-start'>
            <p className='p-0 m-0 py-2'>Copyright 2022</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer