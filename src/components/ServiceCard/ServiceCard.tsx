import React from "react";

import classes from './ServiceCard.module.css'
import img1 from '../../assets/service_care.svg'

const ServiceCard: React.FC = () => {

    return (
        <article className={classes.serviceCard}>
            <img
                src={img1}
                className={classes.image}
                alt="Service image"
            />
            <h3 className={classes.heading}>Search doctor</h3>
            <p className={classes.textContent}>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </article>
    )
}

export default ServiceCard;
