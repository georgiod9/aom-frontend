import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import Lottie from 'react-lottie'
import MusicBarPlayingLottie from '/assets/lottie/music-bar.json'
import Link from 'next/link'

import { useRouter } from 'next/router'
import InteractiveAnimation from '../InteractiveAnimation/InteractiveAnimation'
import YoubetchaIntro from '../../pages/youbetchaIntro'



const Header = ({ audioPlaying, toggleMusicPlayer, enterPokerApp }) => {
  const router = useRouter();
  const [enter, setEnter] = useState(false)
  const youbetchaLogo = "https://arweave.net/voNn6o4t0Ddm3bFHykl4FKOd2yRo3fN8jZAI1C3u8hc"

  const navigatePokerIntro = () => router.push('/youbetcha-intros')

  const [playAppIntroAnimation, setPlayAppIntroAntimation] = enterPokerApp;
  

  const [open, setOpen] = useState(false)
  const menu = useRef(null)

  useEffect(() => {
    if (open) {
      menu.current.style.width = '100%'
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    } else {
      menu.current.style.width = '0'
      document.getElementsByTagName('body')[0].style.overflowY = null
    }
  }, [open])

  const navigateToSection = (menu) => {
    window.location.hash = menu
    setOpen(false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top py-0">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Image src={require('/assets/logo.png')} alt='Art of Mob' height={100} width={100} />
          </div>

          <div className='d-flex align-items-center flex-row'>
            <button className='music-bar' onClick={toggleMusicPlayer}>
              <Lottie
                width={65}
                height={65}
                isStopped={!audioPlaying}
                options={{
                  autoplay: true,
                  loop: true,
                  animationData: MusicBarPlayingLottie
                }}
              />
            </button>

            <button className='p-3' onClick={() => setOpen(true)}>
              <Image src={require('/assets/menu.svg')} alt='Open Menu' height={20} />
            </button>
          </div>
        </div>
      </nav>

      <header>
        <div ref={menu} className="overlay">
          <a onClick={() => setOpen(false)} className="closebtn">&times;</a>
          <div className="overlay-content">
            <a className='menu-item story' onClick={() => navigateToSection('story')}>Story</a>
            <a className='menu-item collection' onClick={() => navigateToSection('collection')}>Collection</a>
            <a className='menu-item roadmap' onClick={() => navigateToSection('roadmap')}>Roadmap</a>
            <a className='menu-item framing' href="http://frame.artofmob.io/" target='_blank' rel="noreferrer">Framing</a>
            <a className='menu-item youbetcha' href="/youbetchaIntro" target='_blank' rel="noreferrer">
              <img 
                style={{
                  "width": "10vw",
                  "height": "auto"
                }} 
                src={youbetchaLogo}></img>
            </a>


            {/* <a className='menu-item mob_challenge' onClick={() => navigateToSection('mob_challenge')}>Mob Challenge</a> */}
            <a className='menu-item team' onClick={() => navigateToSection('team')}>The Team</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header