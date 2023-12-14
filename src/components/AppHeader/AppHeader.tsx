import React from "react";
import Logo from "../Logo";
import classes from "./AppHeader.module.css"

const AppHeader: React.FC = () => {

    return (
        <header className={classes.appHeader}>
            <div className={classes.logo}><Logo/></div>
            <nav className={classes.navigation}>
                <a className={classes.navigationElement}>Home</a>
                <a className={classes.navigationElement}>Find a doctor</a>
                <a className={classes.navigationElement}>Apps</a>
                <a className={classes.navigationElement}>Testimonials</a>
                <a className={classes.navigationElement}>About us</a>
            </nav>
        </header>
    )
}

export default AppHeader;
