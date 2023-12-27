import React from "react";

import classes from './Download.module.css'
import clsx from "clsx";
import Divider from "../common/Divider";
import CustomButton from "../common/CustomButton";
import image from "../../assets/illustration_3.svg"

const Download: React.FC = () => {
    return (
        <section className={classes.downloads}>
            <div className={classes.content}>
                <text className={clsx("commonHeadingStyle", classes.headingPaddings)}>
                    Download our mobile apps
                </text>
                <Divider/>
                <text className={clsx("commonTextStyle", classes.textPaddings)}>
                    Our dedicated patient engagement app and
                    web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely
                </text>
                <CustomButton text={"Download"} className={classes.button}/>
            </div>
            <img
                src={image}
                className={classes.image}
                alt="Image 3"
            />
        </section>
    )
}

export default Download;
