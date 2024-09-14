import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cl from "./Detail.module.scss";
import { VehicleInfo } from "./VehicleInfo/VehicleInfo";

export const Detail = () => {
    const { vehicleId } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        if (vehicleId) {
            const fetchVehicle = async () => {
                try {
                    const response = await fetch(
                        `https://dummyjson.com/products/${vehicleId}`
                    );
                    const data = await response.json();
                    console.log(data);
                    setVehicle(data);
                } catch (err) {
                    console.error(err);
                }
            };

            fetchVehicle();
        }
    }, [vehicleId]);

    if (!vehicle) {
        return <p>Загрузка данных автомобиля...</p>;
    }

    return (
        <div className={cl.container}>
            <VehicleInfo vehicle={vehicle} />
        </div>
    );
};
