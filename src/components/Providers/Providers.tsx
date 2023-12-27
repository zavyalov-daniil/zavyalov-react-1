import React from "react";

import classes from './Providers.module.css'
import clsx from "clsx";
import Divider from "../common/Divider";
import CustomButton from "../common/CustomButton";
import image from "../../assets/illustration_2.svg"
import bgElement from "../../assets/element.svg";

const Providers: React.FC = () => {
    return (
        <section className={classes.providers}>
            <img
                src={image}
                className={classes.image}
                alt="Image 2"
            />
            <div className={classes.content}>
                <text className={clsx("commonHeadingStyle", classes.headingPaddings)}>
                    Leading healthcare providers
                </text>
                <Divider/>
                <text className={clsx("commonTextStyle", classes.textPaddings)}>
                    We provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                    To us, it’s not just work. We take pride in the solutions we deliver
                </text>
                <CustomButton text={"Learn more"} className={classes.button}/>
            </div>
            <img
                src={bgElement}
                className={classes.bgElement}
                alt="Bg element"
            />
        </section>
    )
}

export default Providers;
