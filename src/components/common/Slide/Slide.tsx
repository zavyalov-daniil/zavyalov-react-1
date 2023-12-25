import React from "react";

import classes from './Slide.module.css'
import bgElement from "../../../assets/element3.svg";
import bgElement2 from "../../../assets/element.svg";

interface SlideProps {
    headingText: string;
    mainText: string;
    userPhoto: string;
    userName: string;
    userRole: string
}

const Slide: React.FC<SlideProps> = ({ headingText, mainText, userPhoto, userName, userRole}) => {
    return (
        <article className={classes.slide}>
            <text className={classes.header}>{headingText}</text>
            <div className={classes.divider}></div>
            <div className={classes.content}>
                <UserInfo userPhoto={userPhoto} userName={userName} userRole={userRole}/>
                <text className={classes.text}>
                    {mainText}
                </text>
            </div>
            <img
                src={bgElement}
                className={classes.bgElement}
                alt="Bg element"
            />
            <img
                src={bgElement2}
                className={classes.bgElement2}
                alt="Bg element 2"
            />
        </article>
    )
}

interface UserInfoProps {
    userPhoto: string;
    userName: string;
    userRole: string
}

const UserInfo: React.FC<UserInfoProps> = ({ userRole, userName, userPhoto}) =>  {
    return (
        <div className={classes.userInfo}>
            <div className={classes.photo}>
                <img
                    src={userPhoto}
                    alt="User photo"
                />
            </div>
            <div className={classes.userInfoText}>
                <text className={classes.name}>{userName}</text>
                <text className={classes.role}>{userRole}</text>
            </div>
        </div>
    )
}

export default Slide;
