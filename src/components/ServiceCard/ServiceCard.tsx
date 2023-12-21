import React from "react";

import classes from './ServiceCard.module.css'

interface ServiceCardProps {
    image: string;
    heading: string;
    textContent: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image , heading, textContent }) => {
    return (
        <article className={classes.serviceCard}>
            <div className={classes.imageContainer}>
                <img
                    src={image}
                    className={classes.image}
                    alt="Service image"
                />
            </div>
            <h3 className={classes.heading}>{heading}</h3>
            <p className={classes.textContent}>{textContent}</p>
        </article>
)
}

export default ServiceCard;
