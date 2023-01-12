import React from "react";

import styles from "./HomeServicesSection.module.scss";

const {
    "services-section": servicesSection,
    "services-section__service-card": serviceCard,
} = styles;

const HomeServicesSection = () => {
    return (
        <div className={servicesSection}>
            <div className={serviceCard}>A</div>
            <div className={serviceCard}>B</div>
            <div className={serviceCard}>C</div>
            <div className={serviceCard}>C</div>
        </div>
    );
};

export default HomeServicesSection;
