import Header from '/components/Header'
import HeroHeader from '/components/HeroHeader'
import Welcome from '/components/Welcome'
import WhoWeAre from '/components/WhoWeAre'
import NftList from '/components/NftList'
import Team from '/components/Team'
import Roadmap from '/components/Roadmap'
import Partners from '/components/Partners'
import Footer from '/components/Footer'
import InteractiveAnimation from '../components/InteractiveAnimation/InteractiveAnimation'
import { useEffect, useRef, useState } from 'react'

import HoverIndicator from '../components/HoverIndicator'

import Link from 'next/link'
import ClickToContinue from '../components/ClickToContinue'
import VideoController from '../components/VideoController/VideoController'

export default function Home() {
  const audioRef = useRef(null)
  const videoRef = useRef(null)
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [videoPlayed, setVideoPlayed] = useState(false)
  const [enterPokerApp, setEnterPokerApp] = useState(false)
  const old = false;

  const [enter, setEnter] = useState(false)

  const [isHover, setIsHover] = useState(false)
  const [hideIndicator, setHideIndicator] = useState(false)
  const [inArea, setInArea] = useState(false)

  const indicator_width = 40;
  const indicator_height = 70;
  const indicator_margin_left = 30;
  const indicator_margin_top = 25;

  const indicator_margin_left_str = indicator_margin_left.toString() + "vw";
  const indicator_margin_top_str = indicator_margin_top.toString() + "vh";

  const indicator_width_str = indicator_width.toString() + "vw";
  const indicator_height_str = indicator_height.toString() + "vh";
  //src="https://s3.eu-west-3.amazonaws.com/cdn.artofmob.io/videos/entrance.m4v"

  const clickToContinue_width = 20;
  const clickToContinue_width_str = clickToContinue_width.toString() + "vw";


  const clickToContinue_margin_left = indicator_margin_left + ((indicator_width - 20) / 2)
  const clickToContinue_margin_left_str = clickToContinue_margin_left.toString() + "vw";

  function importAll(r) {
    let images = {};
    let links = [];
    let fileObj = [];

    let obj = {
      'id': 0,
      'path': ""
    }

    r.keys().forEach((item, index) => {
      let url = r(item).default.src
      obj.path = r(item).default.src;

      let p = "/_next/static/media/";

      let rawFileName = url.slice(p.length, obj.path.length) //rawFileName ex: 10.ccddb8a2.png
      let staticFileName = rawFileName.split(".")[0] //staticFileName ex: 10

      let imageId = parseInt(staticFileName);
      obj.id = imageId;
      links[obj.id - 1] = url;

      fileObj.push(obj);

      obj.id = 0;
      obj.path = "";
    });

    return links
  }
  //let framesLinks = importAll(require.context("../assets/sequence", false, /\.(png|jpe?g|svg)$/));
  let framesLinks = importAll(require.context("../assets/gate-sequence", false, /\.(png|jpe?g|svg)$/));



  useEffect(() => {
    if (enter) {
      setTimeout(() => {
        toggleMusicPlayer()
      }, 300)
    }
  }, [enter])

  const toggleMusicPlayer = () => {
    if (audioPlaying) {
      setAudioPlaying(false)
      audioRef.current.pause()
    } else {
      setAudioPlaying(true)
      audioRef.current.play()
    }
  }

  const handleEnterPokerApp = () => {
    setEnterPokerApp(true)
  }

  const handleEnterSite = () => {
    setTimeout(() => {
      setEnter(true)
    }, 600)

  }

  const [isHovering, setIsHovering] = useState(false)
  const [forward, setForward] = useState(false)
  const gateOpen = "https://cdn.discordapp.com/attachments/936378940992393277/1033030066038386789/maingate-10fps-comp.mp4"
  const laundromat = "https://cdn.discordapp.com/attachments/936378940992393277/1032549989672550460/poker-comp-25-compressed.mp4"
  const gateClose = "https://cdn.discordapp.com/attachments/936378940992393277/1033032450818981898/211022-Main-Gate-Loop-Reverse.mp4"
  const margin_left_str = indicator_margin_left_str
  const margin_top_str = indicator_margin_top_str

  if (!enter) {
    return (
      <>
        

        <div style={{
                "position": "relative"
              }}>
      
                <div style={{
                  "position": "absolute",
                  "zIndex": "10",
                  "transform": "translate(" + (0.85 * indicator_margin_left).toString() + "vw, " + "20" + "vh)"
                }}>
                  <HoverIndicator
                    hide={[hideIndicator, setHideIndicator]}
                    margins={[indicator_margin_left_str, indicator_margin_top_str]}
                    dimensions={[(indicator_width), (indicator_height)]} />
                </div>
      
                <div style={{ "position": "absolute" }}>
      
                  <InteractiveAnimation
                    inArea={[inArea, setInArea]}
                    hideIndicator={[hideIndicator, setHideIndicator]}
                    hideOnNotHover={false}
                    isHover={[isHover, setIsHover]}
                    loop={false}
                    marginLeft={indicator_margin_left_str}
                    marginTop={indicator_margin_top_str}
                    width={indicator_width_str}
                    height={indicator_height_str}
                    frameRate={50}
                    framesList={framesLinks}
                    enterFlag={[enter, setEnter]} />
      
      
      
      
      
                </div>
              </div>

        <div>
          {!enter && inArea &&
            <div
              onClick={handleEnterSite}
              className="non-selectable"
              style={{
                "position": "absolute",
                "width": clickToContinue_width_str,
                "height": "max-content",
                "top": "50vh",
                "textAlign": "center",
                "left": clickToContinue_margin_left_str,
                "zIndex": 200,

              }}>
              <ClickToContinue />
            </div>

          }
        </div>


        {old &&
          <div className='v-100 d-flex justify-content-center align-items-center video-entrance' style={{ height: '100vh' }}>
            <video
              width='100%'
              ref={videoRef}
              preload="auto"
              src="https://s3.eu-west-3.amazonaws.com/cdn.artofmob.io/videos/entrance.m4v"
              type="video/mp4"
              autoPlay={true}
              onPlay={() => {
                setVideoPlaying(true)
              }}
              onEnded={() => {
                setVideoPlayed(true)
              }}
            >
            </video>

            {!videoPlaying && (
              <>
                <button
                  className='video-play web-button'
                  onClick={() => videoRef?.current?.play()}>
                  MOB IN
                </button>
                <button
                  className='video-play mobile-button'
                  onClick={() => setVideoPlayed(true)}>
                  MOB IN
                </button>
              </>
            )}
          </div>
        }
      </>
    )
  }



  return (
    <>
      <audio
        src={'https://s3.eu-west-3.amazonaws.com/cdn.artofmob.io/assets/background-music.mp3'}
        ref={audioRef}
        loop
      ></audio>

      <Header key='Header' toggleMusicPlayer={toggleMusicPlayer} audioPlaying={audioPlaying} enterPokerApp={[enterPokerApp, setEnterPokerApp]} />
      <HeroHeader key='HeroHeader' />
      <Welcome key='Welcome' />
      <WhoWeAre key='WhoWeAre' />
      <NftList key='NftList' />
      <Roadmap key='Roadmap' />
      <Partners key='Partners' />
      <Team key='Team' />
      <Footer key='Footer' />


    </>
  )


}
