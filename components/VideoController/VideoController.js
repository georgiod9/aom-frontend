import { useEffect, useRef, useState } from 'react'

const VideoController = (props) => {
    const [isHovering, setIsHovering] = props.isHover
    const [forward, setForward] = props.forward
    const videoForwardUrl = props.urlForward
    const videoBackwardUrl = props.urlBackward
    const margin_left = props.margins[0]
    const margin_top = props.margins[1]
    const width = props.dimensions[0]
    const height = props.dimensions[1]
    const videoRef = useRef(null)
    let screenHeight = 0;
    let screenWidth = 0;
    const [maxHeightPx, setMaxHeightPx] = useState("1080px")
    const [maxWidthPx, setMaxWidthPx] = useState("1920px")


    let screenHeight_px = screenHeight.toString() + "px";
    let screenWidth_px = screenWidth.toString() + "px";
    const [x, setX] = useState();
    const [y, setY] = useState();

    const target_margin_left_ratio = margin_left / 100
    const target_margin_top_ratio = margin_top / 100
    const target_width_ratio = width / 100
    const target_height_ratio = height / 100

    const [inArea, setInArea] = useState(false)
    const [playedForward, setPlayedForward] = useState(false)
    const [playedBackward, setPlayedBackward] = useState(false)
    const [played, setPlayed] = useState(false)

    const [play, setPlay] = useState(false)
    const [playForward, setPlayForward] = useState(false)
    const [playBackward, setPlayBackward] = useState(false)

    useEffect(() => {
        if (window !== undefined) {
            screenWidth = window.innerWidth;
            screenHeight = window.innerHeight;
        }
        screenHeight_px = screenHeight.toString() + "px";
        screenWidth_px = 1920 + "px";
        setMaxHeightPx(screenHeight_px)
        setMaxWidthPx(screenWidth_px)


        const update = (e) => {
            setX(e.x);
            setY(e.y);
        }
        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);

        var playingVid = document.getElementById("#playingVid")
        console.log("PLAUING VID:%%% ", playingVid)
        playingVid.onended = function (e) {
            playingVid.pause()
        }
        
        if (playingVid != null && playingVid.ended) {
            playingVid.currentTime = 0;
        }

        var videoForward = document.getElementsByTagName(videoForwardUrl)
        console.log("VIDEO FORWARD((: ", videoForward)
        videoForward.onended = function (e) {
            setPlayedForward(true)
            console.log("FINSIHED PLAYING FORWARD:(()) ")
            
        }

        var videoBackward = document.getElementsByTagName(videoBackwardUrl)
        videoBackward.onended = function (e) {
            setPlayedBackward(true)
            console.log("FINSIHED PLAYING FORWARD:(()) ")
            
        }



        if (
            x >= target_margin_left_ratio * screenWidth &&
            x <= (target_margin_left_ratio + target_width_ratio) * screenWidth &&
            y >= target_margin_top_ratio * screenHeight &&
            y <= (target_height_ratio + target_margin_top_ratio) * screenHeight
        ) {

          playVideo(videoForwardUrl)
          setInArea(true)

            //console.log("SHOULD GO FORWARD%")
            //setPlay(true)
            //if (!playedForward) {
            //    setPlayForward(true)
            //    console.log("SHOULD TRIGGER FORWARD%")
            //}

        }
        else {
            playVideo(videoBackwardUrl)
            setInArea(false)
            //console.log("SHOULD GO BACKWARD%")
            //setPlayForward(false)
            //if (playingVid) {
            //    playingVid.currentTime = 0;
           // }
            //playingVid.currentTime = 0;
            //setPlay(false)
            //if (!playedBackward) {
            //    setPlayBackward(true)
           // }

        }

        //if (!playedForward && playForward) {
           // playVideo(videoForwardUrl)
           // 
            //setPlayedBackward(false)
           // console.log("PLAY FORWARD%")

       // }

       // if (!playedBackward && playBackward) {
        //   playVideo(videoBackwardUrl)
          //  setPlayedForward(false)
           // console.log("PLAY BACKWARD((")
        //}
    })


    const playVideo = (videoUrl) => {
        return (
            <video
                id="#playingVid"
                width={maxWidthPx}

                ref={videoRef}
                src={videoUrl}
                muted={true}
                type="video/mp4"
                autoPlay={true}
            >
            </video>
        )
    }

    return (
        <div>
            {inArea &&
                playVideo(videoForwardUrl)
            }

            {
                !inArea&&
               
                playVideo(videoBackwardUrl)
            }

        </div>
    )
}

export default VideoController;