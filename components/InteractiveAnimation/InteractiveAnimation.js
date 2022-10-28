import { useEffect } from "react"
import { useState } from "react";

import Loading from "../Loading";

const InteractiveAnimation = (props) => {

    const [x, setX] = useState();
    const [y, setY] = useState();
    const screenWidth = 0;
    const screenHeight = 0;

    const [show, setShow] = useState(true)
    const [enter, setEnter] = props.enterFlag
    const frameRate = props.frameRate;
    const hideOnNotHover = props.hideOnNotHover;
    const [isHover, setIsHover] = props.isHover;
    const [inArea, setInArea] = props.inArea;


    const target_width = props.width;
    const target_height = props.height;

    const target_margin_left = props.marginLeft;
    const target_margin_top = props.marginTop;

    const srcWidth = props.srcWidth
    const srcHeight = props.srcHeight



    const loop_anim = props.loop;

    const getIntFromString = (string, delim) => {
        return parseInt(string.split(delim)[0])
    }

    const target_margin_left_int = getIntFromString(target_margin_left, "v")
    const target_margin_top_int = getIntFromString(target_margin_top, "v")

    const target_margin_left_ratio = target_margin_left_int / 100
    const target_margin_top_ratio = target_margin_top_int / 100

    const target_width_ratio = getIntFromString(target_width, "v") / 100
    const target_height_ratio = getIntFromString(target_height, "v") / 100

    const clip_width = 662;
    const clip_height = 712;
    const offset_x = props.offset[0]
    const offset_y = props.offset[1]
    const offset_left = props.offsetLeft
    const clip_margin_left = offset_x - (clip_width / 2)
    const clip_margin_top = offset_y - (clip_height / 2)

    let clip_margin_left_vw = (clip_margin_left / screenWidth) * 100;
    let clip_margin_top_vh = (clip_margin_top / screenHeight) * 100;


    const [clip_margin_left_str, setClipMarginLeftStr] = useState("0vw")
    const [clip_margin_top_str, setClipMarginTopStr] = useState("0vh")


    const framesList = props.framesList

    const [currentPosition, setCurrentPosition] = useState(0)
    const url = framesList[currentPosition]

    const [forward, setForward] = useState(true)


    const [hideIndicator, setHideIndicator] = props.hideIndicator;

    const [resizeW, setResizeW] = useState(1)
    const [resizeH, setResizeH] = useState(1)

    const [ratioW, setRatioW] = useState(1)
    const [ratioH, setRatioH] = useState(1)

    const [windowWidth, setWindowWidth] = useState(1920)
    const [windowHeight, setWindowHeight] = useState(1080)

    const original_clip_width = props.clipWidth;
    const original_clip_height = props.clipHeight;

    const clip_distance_left = props.clipDistanceLeft;
    const clip_distance_top = props.clipDistanceTop;





    useEffect(() => {
        function handleWindowResize() {
            if (window !== undefined) {
                setWindowHeight(window.innerHeight);
                setWindowWidth(window.innerWidth);
                resizeEverything();
            }
        }

        if (window !== undefined) {
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
            resizeEverything();
        }

        window.addEventListener('resize', handleWindowResize)


        function resizeEverything() {
            screenWidth = window.innerWidth;
            screenHeight = window.innerHeight;

            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)

            setRatioW(windowWidth/1920)
            setRatioH(windowHeight/1080)
            setResizeW(((original_clip_width) * ratioW).toString() + "px")
            setResizeH(((original_clip_height) * ratioH ).toString() + "px")

            offset_left = props.offsetLeft * ratioW

            let tx = (clip_distance_left ) * (windowWidth/1920)
            
            let ty = (clip_distance_top)  * (windowHeight/1080)
            console.log("TEST ((", tx, clip_width, windowWidth)
            setClipMarginLeftStr(tx.toString() + "px")
            setClipMarginTopStr(ty.toString() + "px")
        }

       
        
        const update = (e) => {
            setX(e.x);
            setY(e.y);
        }
        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);
        if (
            x >= target_margin_left_ratio * screenWidth &&
            x <= (target_margin_left_ratio + target_width_ratio) * screenWidth &&
            y >= target_margin_top_ratio * screenHeight &&
            y <= (target_height_ratio + target_margin_top_ratio) * screenHeight
        ) {
            setForward(true)

            setHideIndicator(true);

        } else {
            setInArea(false)
            if (!loop_anim) {
                setForward(false)
            }
        }

        setTimeout(() => {
            setIsHover(true)
            if (forward) {
                if (currentPosition >= framesList.length - 1) {
                    setCurrentPosition(framesList.length - 1);
                    if (loop_anim) {
                        setForward(true)
                        //return <Loading/>
                    }
                    setInArea(true);

                }
                else {
                    setCurrentPosition(currentPosition + 1);
                }
            }
            else {
                if (currentPosition <= 0) {
                    setInArea(false)

                    setCurrentPosition(0);
                    if (hideOnNotHover && !inArea) {
                        setIsHover(false)
                    }
                }
                else {
                    setCurrentPosition(currentPosition - 1)
                }
            }
        }, frameRate)

        return () => {
            window.removeEventListener('mousemove', update);
            window.removeEventListener('touchmove', update);
            window.removeEventListener('resize', handleWindowResize);
        }
    })

    const handleClick = () => {
        setEnter(true)
    }
    return (
        <div style={{
            "position": "relative",
            "maxWidth": "100vw",
            "maxHeight": "100vh",
            "margin": "auto auto",
            "zIndex": 1000
        }} >

            <div style={{
                "marginLeft": clip_margin_left_str,
                "marginTop": clip_margin_top_str,
            }}>
                <img style={{
                    "margin": "auto auto",
                    "width": resizeW,
                    "height": resizeH,
                    "maxWidth": "100vw",
                }} src={url} />
            </div>

            <div style={{
                "position": "absolute",
                "top": "0%",
                "marginTop": target_margin_top,
                "marginLeft": target_margin_left,
                "padding": "0px 0px",
                "height": target_height,
                "width": target_width,

            }}
                onClick={handleClick}>

            </div>
        </div>

    )
}

export default InteractiveAnimation