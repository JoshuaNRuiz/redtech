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
    return (
        <nav className={nav}>
            <div className={nav__logo__container}>
                <Image className={nav__logo} src={navbarLogo} alt='' />
            </div>
            <div className={nav__link__container}>
                <Link href='consultation' passHref legacyBehavior>
                    <a className={nav__link}>Consultation</a>
                </Link>
                <Link href='about' passHref legacyBehavior>
                    <a className={nav__link}>about</a>
                </Link>

                <Link href='services' passHref legacyBehavior>
                    <a className={nav__link}>Services</a>
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
