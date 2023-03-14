import "../css/banner.css"
import { useState } from "react";
import Slider from "react-slick"
function Banner() {
    return (
        <div className="banner">
        <p className="rcmt">Recommended For You</p>
        <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        <div className="sliceCenter">
       <Slider>
        
       </Slider>
        </div>
        </div>
    )
}
export default Banner;