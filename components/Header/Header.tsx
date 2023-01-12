import React from "react";

import styles from "./Header.module.scss";

const {
    header__container,
    header__overlay,
    header__content,
    header__content__brand,
    header__content__image,
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
                <img
                    className={header__content__image}
                    src='https://redtech.nyc3.digitaloceanspaces.com/redtech-logo-red'
                />
                <h2 className={header__content__title}>IT & Web Solutions</h2>
                {/* <h3 className={header__content__subtitle}></h3> */}
                <button className={header__content__button}>CONTACT US</button>
            </div>
        </div>
    );
};

export default Header;
