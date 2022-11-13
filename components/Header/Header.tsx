import React from "react";
import Image from "next/image";

import styles from "./Header.module.scss";
import brandLogo from "../../public/brand-logo-red.png";

const {
    header__container,
    header__overlay,
    header__content,
    header__content__brand,
    header__content__title,
    header__content__subtitle,
    header__content__button,
    header__detail,
} = styles;

const Header = () => {
    return (
        <div className={header__container}>
            <div className={header__overlay}></div>
            <div className={header__content}>
                <h2 className={header__content__title}>RedTech</h2>
                <h3 className={header__content__subtitle}>
                    Local IT Solutions in New York City
                </h3>
                <button className={header__content__button}>CONTACT</button>
            </div>
            <p className={header__detail}>Based in Queens, NY</p>
        </div>
    );
};

export default Header;
