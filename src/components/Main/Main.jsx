import React from "react";
import cl from "./Main.module.scss";
import { AppRoutes } from "../AppRoutes";

export const Main = () => {
    return (
        <main className={cl.main}>
            <section className={cl.container}>
                <AppRoutes />
            </section>
        </main>
    );
};
