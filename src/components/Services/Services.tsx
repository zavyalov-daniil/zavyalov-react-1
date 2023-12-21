import React from "react";

import classes from './Services.module.css'
import ServiceCard from "../ServiceCard";
import serviceSearch from "../../assets/service_search.svg";
import serviceCare from "../../assets/service_care.svg";
import serviceOnline from "../../assets/service_online.png";
import serviceConsultation from "../../assets/service_consultation.svg";

const Services: React.FC = () => {
    return (
        <section className={classes.services}>
            <ServiceCard
                image={serviceSearch}
                heading={"Search doctor"}
                textContent={"Choose your doctor from thousands of specialist, general, and trusted hospitals"}
            />
            <ServiceCard
                image={serviceOnline}
                heading={"Online pharmacy"}
                textContent={"Buy  your medicines with our mobile application with a simple delivery system"}
            />
            <ServiceCard
                image={serviceCare}
                heading={"Consultation"}
                textContent={"Free consultation with our trusted doctors and get the best recomendations"}
            />
            <ServiceCard
                image={serviceConsultation}
                heading={"Emergency care"}
                textContent={"You can get 24/7 urgent care for yourself or your children and your lovely family"}
            />
            <ServiceCard
                image={serviceCare}
                heading={"Emergency care"}
                textContent={"You can get 24/7 urgent care for yourself or your children and your lovely family"}
            />
        </section>
    )
}

export default Services;
