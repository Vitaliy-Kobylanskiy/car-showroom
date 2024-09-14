import React from "react";
import { Link } from "react-router-dom";
import cl from "./Header.module.scss";
import headerLogo from "../../img/header-logo.jpg";

export const Header = () => {
    return (
        <header className={cl.header}>
            <section className={cl.container}>
                <div className={cl.logoWrapper}>
                    <a href="/" className={cl.logoLink}>
                        <div className={cl.logoBlock}>
                            <img
                                className={cl.logoImg}
                                src={headerLogo}
                                alt="logo"
                            />
                            <p className={cl.logoText}>Car Showroom</p>
                        </div>
                    </a>
                </div>
                <ul className={cl.headerList}>
                    <li className={cl.headerItem}>
                        <Link className={cl.headerLink} to="/">
                            Главная
                        </Link>
                    </li>
                    {/* <li className={cl.headerItem}>
                        <Link className={cl.headerLink} to="/detail">
                            Индивидуальная
                        </Link>
                    </li> */}
                </ul>
            </section>
        </header>
    );
};
