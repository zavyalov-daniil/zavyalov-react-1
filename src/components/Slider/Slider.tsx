import React from "react";

import classes from './Slider.module.css'
import userPhoto from "../../assets/user_photo.png";
import Slide from "../common/Slide";
import slideLeft from "../../assets/slide_left.svg";
import slideRight from "../../assets/slide_right.svg";
import slider from "../../assets/slider.svg";

const Slider: React.FC = () => {
    return (
        <section className={classes.slider}>
            <Slide
                headingText={"What our customer are saying"}
                mainText={"“Our dedicated patient engagement app and \n" +
                    "web portal allow you to access information instantaneously (no tedeous form, long calls, \n" +
                    "or administrative hassle) and securely”"}
                userPhoto={userPhoto}
                userName={"Edward Newgate"}
                userRole={"Founder Circle"}
            />
            <div className={classes.control}>
                <img
                    src={slideLeft}
                    className={classes.slideLeft}
                    alt="Slide left"
                />
                <img
                    src={slider}
                    alt="Slider"
                />
                <img
                    src={slideRight}
                    className={classes.slideRight}
                    alt="Slide right"
                />
            </div>
        </section>
    )
}

export default Slider;
