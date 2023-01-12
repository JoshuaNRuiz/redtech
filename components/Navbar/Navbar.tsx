import Link from "next/link";
import React from "react";
import Icon from "@mui/material/Icon";

import styles from "./Navbar.module.scss";

const {
    nav: navClassName,
    nav__logo: navLogoClassName,
    nav__link__container: navLinkContainerClassName,
    nav__link: navLinkClassName,
    "nav__burger-menu": burgerMenuClassName,
    "nav__burger-menu__button": burgerMenuButtonClassName,
    "nav__burger-menu__button__icon": burgerMenuIconClassName,
} = styles;

const Navbar = () => {
    const logoSrc =
        "https://redtech.nyc3.cdn.digitaloceanspaces.com/brand-logo-red.png";

    return (
        <nav className={navClassName}>
            <img className={navLogoClassName} src={logoSrc} alt='' />

            <div className={navLinkContainerClassName}>
                <Link href='about' passHref legacyBehavior>
                    <a className={navLinkClassName}>about us</a>
                </Link>
                <Link href='services' passHref legacyBehavior>
                    <a className={navLinkClassName}>services</a>
                </Link>
            </div>

            <div className={burgerMenuClassName}>
                <button className={burgerMenuButtonClassName}>
                    <Icon className={burgerMenuIconClassName}>menu</Icon>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
