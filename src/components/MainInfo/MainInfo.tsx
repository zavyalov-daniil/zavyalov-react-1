import React from "react";
import clsx from "clsx";
import CustomButton from "../CustomButton";

//Styles
import classes from './MainInfo.module.css'
//Assets
import headerIllustration from '../../assets/header_illustration.svg'
import bgElement from '../../assets/element.svg'

const MainInfo: React.FC = () => {
    return (
        <div className={classes.mainInfo}>
            <HeaderText/>
            <img
                src={headerIllustration}
                className={clsx(classes.logo, classes.react)}
                alt="React logo"
            />
            <img
                src={bgElement}
                className={classes.bgElement}
                alt="Bg element"
            />
        </div>
    )
}

const HeaderText: React.FC = () => {
    return (
        <div className={classes.info}>
            <h1 className = {classes.headingText}>Virtual healthcare for you</h1>
            <div className = {classes.text}>
                Our service provides progressive,
                and affordable healthcare, accessible on mobile and online for everyone
            </div>
            <CustomButton text={"Consult today"}/>
        </div>
    )
}

export default MainInfo;
