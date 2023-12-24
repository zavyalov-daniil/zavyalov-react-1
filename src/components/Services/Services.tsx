import React from "react";

import classes from './Services.module.css'
import ServiceCard from "../ServiceCard";
import serviceSearch from "../../assets/service_search.svg";
import serviceCare from "../../assets/service_care.svg";
import serviceOnline from "../../assets/service_online.svg";
import serviceConsultation from "../../assets/service_consultation.svg";
import serviceInfo from "../../assets/service_details.svg"
import serviceTracking from "../../assets/service_tracking.svg"
import Divider from "../Divider";
import clsx from "clsx";
import CustomButton from "../CustomButton";

const Services: React.FC = () => {
    const cardData = [
        {
            image: serviceSearch,
            headingText: "Search doctor",
            mainText: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            image: serviceOnline,
            headingText: "Online pharmacy",
            mainText: "Buy your medicines with our mobile application with a simple delivery system"
        },
        {
            image: serviceConsultation,
            headingText: "Consultation",
            mainText: "Free consultation with our trusted doctors and get the best recommendations"
        },
        {
            image: serviceInfo,
            headingText: "Details info",
            mainText: "Free consultation with our trusted doctors and get the best recommendations"
        },
        {
            image: serviceCare,
            headingText: "Emergency care",
            mainText: "You can get 24/7 urgent care for yourself or your children and your lovely family"
        },
        {
            image: serviceTracking,
            headingText: "Tracking",
            mainText: "Track and save your medical history and health data "
        },
    ];

    const cardComponents = cardData.map(( data, index) => (
        <ServiceCard key = {index} image={ data.image } heading={ data.headingText } textContent={ data.mainText } />
    ));

    return (
        <section className={classes.services}>
            <text className={clsx("commonHeadingStyle", classes.headingPaddings)}>Our services</text>
            <Divider />
            <text className={clsx("commonTextStyle", classes.textPaddings)}>
                We provide to you the best choices for you.
                Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors
                you can consult with us which type of service is suitable for your health
            </text>
            <div className={classes.serviceCards}>{ cardComponents }</div>
            <CustomButton text={"Learn more"} className = {classes.button} />
        </section>
    )
}

export default Services;
