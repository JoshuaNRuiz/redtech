import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "./Navbar.module.scss";
import navbarLogo from "../../public/navbar-logo.png";

const {
    nav,
    nav__logo__container,
    nav__logo,
    nav__link__container,
    nav__link,
    "nav__buger-menu__container": nav__burgerMenu__container,
    "nav__burger-menu__icon": nav__burgerMenu__icon,
} = styles;

const Navbar = () => {
    const logoSrc =
        "https://redtech.nyc3.cdn.digitaloceanspaces.com/brand-logo-red.png";

    return (
        <nav className={nav}>
            <img className={nav__logo} src={logoSrc} alt='' />

            <div className={nav__link__container}>
                <Link href='about' passHref legacyBehavior>
                    <a className={nav__link}>about us</a>
                </Link>
                <Link href='services' passHref legacyBehavior>
                    <a className={nav__link}>services</a>
                </Link>
            </div>

            <div
                className={nav__burgerMenu__container}
                style={{ display: "none" }}>
                <div className={nav__burgerMenu__icon}></div>
            </div>
        </nav>
    );
};

export default Navbar;
