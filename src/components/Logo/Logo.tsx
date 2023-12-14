import React from "react";

import classes from './Logo.module.css'

const Logo: React.FC = () => {

    return (
        <div className={classes.logo}>
            <div className={classes.icon}>T</div>
            <div className={classes.text}>HealthCare</div>
        </div>
    )
}

export default Logo;
