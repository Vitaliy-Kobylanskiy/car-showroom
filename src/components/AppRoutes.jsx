import React from "react";
import { Routes, Route } from "react-router-dom";
import { Detail } from "../pages/Detail/Detail";
import { Home } from "../pages/Home/Home";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/detail/vehicles/:vehicleId"
                    element={<Detail />}
                />
            </Routes>
        </>
    );
};
