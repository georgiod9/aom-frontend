import { useEffect, useState } from "react";
import hand from "../../assets/youbetcha/hand.png";

const HoverIndicator = (props) => {
    const [width, height] = props.dimensions;
    const [margin_left, margin_top] = props.margins;
    const [hide, setHide] = props.hide;

    return (
        <div style={{
            "display": hide ? "none" : "block",
            "position": "absolute",
            "marginLeft": margin_left,
            "marginTop": margin_top,
            "width": width + "vw",
            "height": height + "vh",


        }} className="blink">
            <div className="hand-box">
                <img
                    style={{
                        "width": "5vw",
                        "height": "auto",


                    }}
                    className="hand"
                    src={hand.src}></img>
            </div>

        </div>
    )

}

export default HoverIndicator;