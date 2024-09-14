import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./ItemCar.module.scss";

export const ItemCar = ({ filter }) => {
    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();

    const fetchVehicles = async () => {
        try {
            const response = await fetch(
                "https://dummyjson.com/products/category/vehicle"
            );
            const data = await response.json();
            setVehicles(data.products);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const filteredVehicles = vehicles.filter((vehicle) =>
        vehicle.title.toLowerCase().includes(filter.toLowerCase())
    );

    const handleClick = (id) => {
        navigate(`/detail/vehicles/${id}`); // Перенаправление на страницу деталей
    };

    return (
        <>
            {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                    <li
                        className={cl.itemBlock}
                        key={vehicle.id}
                        onClick={() => handleClick(vehicle.id)}
                    >
                        <h2 className={cl.itemTitle}>{vehicle.title}</h2>
                        <p className={cl.itemText}>Цена: {vehicle.price}$</p>
                    </li>
                ))
            ) : (
                <p>Нет такого автомобиля.</p>
            )}
        </>
    );
};
