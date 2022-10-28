{!enter && inArea &&

    <div>
        <div style={{
            "position": "absolute",
            "zIndex": 11,
            "display": inArea ? "none" : "none"
        }}>
            <img style={{
                "width": "100vw",
                "height": "100vh",
            }} src={laundromatAfterLoop.src}></img>

        </div>

        <div
            onClick={handleEnterApp}
            className="non-selectable"
            style={{
                "position": "absolute",
                "width": indicator_width_str,
                "height": "max-content",
                "top": "25vh",
                "textAlign": "center",
                "left": indicator_margin_left_str,
                "zIndex": 200,
            }}>
            <ClickToContinue />
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