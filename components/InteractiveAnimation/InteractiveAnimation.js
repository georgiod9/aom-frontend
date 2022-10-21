import { useEffect } from "react"
import { useState } from "react";

import Loading from "../Loading";

const InteractiveAnimation = (props) => {
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


    const framesList = props.framesList

    const [currentPosition, setCurrentPosition] = useState(0)
    const url = framesList[currentPosition]

    const [forward, setForward] = useState(true)


    const [x, setX] = useState();
    const [y, setY] = useState();
    const screenWidth = 0;
    const screenHeight = 0;

    const [hideIndicator, setHideIndicator] = props.hideIndicator;


    useEffect(() => {
        if (window !== undefined) {
            screenWidth = window.innerWidth;
            screenHeight = window.innerHeight;
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
                    if(hideOnNotHover && !inArea) {
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
        }
    })

    const handleClick = () => {
        setEnter(true)
    }
    return (
        <div style={{
            "position": "relative",
            "maxWidth": "100vw",
            "maxHeight": "100vh"
        }} >
        
            <img style={{
                "margin": "auto auto",
                "width": "100vw",
                "height": "100vh",
                "maxWidth": "100vw",
            }} src={url} />
            <div style={{
                "position": "absolute",
                "top": "0%",
                "marginTop": target_margin_top,
                "marginLeft": target_margin_left,
                "padding": "0px 0px",
                "height": target_height,
                "width": target_width,
                "border": "0px solid white"
                
            }}
            onClick={handleClick}>

            </div>
        </div>

    )
}

export default InteractiveAnimation