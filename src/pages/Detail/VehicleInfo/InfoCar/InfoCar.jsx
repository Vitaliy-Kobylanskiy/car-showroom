import React from "react";
import cl from "./InfoCar.module.scss";

const InfoCar = ({ vehicle }) => {
    return (
        <div className={cl.containerVehicle}>
            <h2>{vehicle.title}</h2>
            <p>Цена: {vehicle.price}$</p>
            <p className={cl.vehicleDescription}>
                Описание: {vehicle.description}
            </p>
            <img
                className={cl.vehicleImg}
                src={vehicle.thumbnail}
                alt={vehicle.title}
            />
            <p className={cl.vehicleRate}>Общий рейтинг: {vehicle.rating}</p>
        </div>
    );
};

export default InfoCar;
