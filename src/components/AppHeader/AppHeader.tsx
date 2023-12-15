import React from "react";
import Logo from "../Logo";
import classes from "./AppHeader.module.css"
import clsx from "clsx";

const AppHeader: React.FC = () => {

    return (
        <header className={classes.appHeader}>
            <div className={classes.logo}><Logo/></div>
            <nav className={classes.navigation}>
                <a className={
                    clsx(classes.navigationElement,
                        classes.bold)
                }>Home</a>
                <a className={
                    clsx(classes.navigationElement,
                        classes.regular)
                }>Find a doctor</a>
                <a className={
                    clsx(classes.navigationElement,
                        classes.regular)
                }>Apps</a>
                <a className={
                    clsx(classes.navigationElement,
                        classes.regular)
                }>Testimonials</a>
                <a className={
                    clsx(classes.navigationElement,
                        classes.regular)
                }>About us</a>
            </nav>
        </header>
    )
}

export default AppHeader;
