import DiscordIcon from '/assets/social-icons/discord.svg'
import TwitterIcon from '/assets/social-icons/twitter.svg'
import InstagramIcon from '/assets/social-icons/instagram.svg'

import Link from 'next/link'

const HeroHeader = () => {
  return (
    <div className='hero-smoke'>
      <div className='hero'>
        <div className='container-fluid'>
          <div className='row d-flx align-items-center my-2'>
            <div className='col-4 social-icons align-items-end d-flex px-5'>
              <a href='https://discord.gg/artofmob' alt='Art of Mob - Discord' target='_blank' rel="noreferrer">
                <img src={DiscordIcon.src} alt='Art of Mob - Discord' width={30} height={30} />
              </a>

              <a href='https://twitter.com/artofmob' alt='Art of Mob - Discord' target='_blank' rel="noreferrer">
                <img src={TwitterIcon.src} alt='Art of Mob - Twitter' width={30} height={30} />
              </a>

              <a href='https://www.instagram.com/artofmobnft' alt='Art of Mob - Discord' target='_blank' rel="noreferrer">
                <img src={InstagramIcon.src} alt='Art of Mob - Instagram' width={30} height={30} />
              </a>
            </div>

            <div className='col-8 justify-content-end align-items-end d-flex'>
              <Link href='/challenge'>
                <button className='mob-challenge-button mx-5'>
                  MOB CHALLENGE
                  <img src='/assets/mob-gun.png' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHeader