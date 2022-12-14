import InteractiveAnimation from "../components/InteractiveAnimation/InteractiveAnimation";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

//animation for when laundromat door is completely closed
//import laundromatLoop from "../assets/youbetcha/laundry-before10fps.gif";
//newimport laundromatLoop from "../assets/youbetcha/laundry-before/laundry-before-10fps-c.gif";
import laundromatLoop from "../assets/laundry-anim/gif-10fps.gif";

import HoverIndicator from "../components/HoverIndicator";

//animation for when laundromat door is completely open
//import laundromatAfterLoop from "../assets/youbetcha/laundry-loop-after10fps.gif";
//import laundromatAfterLoop from "../assets/youbetcha/laundry-after/laundry-after-10fps-c.gif";

import ClickToContinue from "../components/ClickToContinue";

//animation for entering poker lounge
//import enterPokerLounge from "../assets/youbetcha/poker-animation-12fps.gif";
import enterPokerLounge from "../assets/youbetcha/enterpoker/poker-10fps-c.gif";




import FramesPlayer from "../components/FramesPlayer/FramesPlayer";

const YoubetchaIntro = () => {
    const videoRef = useRef(null);
    const router = useRouter();
    const [screenWidth, setScreenWidth] = useState(1920)
    const [screenHeight, setScreenHeight] = useState(1080)

    useEffect(() => {
        if (window !== undefined) {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        function handleWindowResize() {
            if (window !== undefined) {
                setScreenHeight(window.innerHeight)
                setScreenWidth(window.innerWidth)
            }
        }
        window.addEventListener('resize', handleWindowResize);

        if (window !== undefined) {
            setScreenWidth(window.innerWidth)
            setScreenHeight(window.innerHeight)
            handleWindowResize()

        }
    })


    const [isHover, setIsHover] = useState(false);
    const indicator_width = 14;
    const indicator_height = 45;

    const indicator_width_str = indicator_width.toString() + "vw";
    const indicator_height_str = indicator_height.toString() + "vh";

    const indicator_margin_left = 43.2;
    const indicator_margin_left_str = indicator_margin_left.toString() + "vw";

    const indicator_margin_top = 30;
    const indicator_margin_top_str = indicator_margin_top.toString() + "vh";


    const [hideIndicator, setHideIndicator] = useState(false);
    const [inArea, setInArea] = useState(false);

    const door_width_midpoint = indicator_margin_left + (screenWidth - (indicator_margin_left) - (screenWidth - indicator_margin_left - indicator_width)) / 2;

    const door_width_midpoint_str = door_width_midpoint.toString() + "vw";

    function importAll(r) {
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

    //newlet framesLinksDoor = importAll(require.context("../assets/youbetcha/sequence-door/", false, /\.(png|jpe?g|svg)$/));
    let framesLinksDoor = importAll(require.context("../assets/laundry-anim/seq", false, /\.(png|jpe?g|svg)$/));


    const [enter, setEnter] = useState(false)
    const [enterDoor, setEnterDoor] = useState(false)
    const [enterApp, setEnterApp] = useState(false)
    const [pauseAnimation, setPauseAnimation] = useState(false)


    // redirect here
    const handleEnterApp = () => {
        //router.push("https://youbetcha.club/")
        setEnterApp(true);
        setTimeout(() => {
            //setPauseAnimation(true)
            router.push("https://youbetcha.club/")
        }, 6000)

    }
    return (
        <div className="rel">
            {
                <div
                    onClick={handleEnterApp}
                    id="beforeClick"
                    style={{
                        "display": enterApp ? "none" : "block",
                    }} >

                    <div style={{
                        "transform": "translate(" + (0.25 * indicator_margin_left).toString() + "vw, " + "5" + "vh)",
                    }}>
                        <HoverIndicator
                            hide={[hideIndicator, setHideIndicator]}
                            margins={[indicator_margin_left_str, indicator_margin_top_str]}
                            dimensions={[indicator_width, indicator_height]} />

                    </div>

                    <div style={{
                        "position": "absolute",
                        "zIndex": -10,
                    }} className="abs">

                        <img style={{
                            "width": "100vw",
                            "height": "100vh"
                        }} src={laundromatLoop.src} ></img>
                    </div>


                    <div onClick={handleEnterApp} style={{
                        "display": isHover ? "block" : "block",
                        "position": "absolute",
                        "zIndex": -1
                    }}>
                        {!enter &&
                            <div style={{}}>
                                <InteractiveAnimation
                                    offsetLeft={0}
                                    clipDistanceTop={317}
                                    clipDistanceLeft={839}
                                    clipWidth={252}
                                    clipHeight={475}
                                    screenWidth={screenWidth}
                                    screenHeight={screenHeight}
                                    offset={[0, 0]}
                                    inArea={[inArea, setInArea]}
                                    hideIndicator={[hideIndicator, setHideIndicator]}
                                    loop={false}
                                    hideOnNotHover={true}
                                    isHover={[isHover, setIsHover]}
                                    marginLeft={indicator_margin_left_str}
                                    marginTop={indicator_margin_top_str}
                                    width={indicator_width_str}
                                    height={indicator_height_str}
                                    frameRate={150}
                                    framesList={framesLinksDoor}
                                    enterFlag={[enterDoor, setEnterDoor]} />
                            </div>
                        }

                    </div>


                </div>
            }


            {enterApp &&
                <div id="afterClick"
                    style={{
                        "display": enterApp ? "block" : "none",
                        "position": "absolute",
                        "top": "0%",
                        "left": "0%",
                        "width": "100vw",
                        "height": "100vh"
                    }}>

                    {
                        !pauseAnimation
                        &&
                        <div style={{
                            "width": "100vw",
                            "height": "100vh",
                            "maxWidth": "100vw",
                            "maxHeight": "100vh",
                            "border": "1px solid white"
                        }}>
                            <img
                                style={{
                                    "width": "100vw",
                                    "height": "100vh"
                                }}
                                src={enterPokerLounge.src}>
                            </img>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default YoubetchaIntro;