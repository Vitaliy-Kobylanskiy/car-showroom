import React, { useState } from "react";
import { FilterForm } from "./FilterForm/FilterForm";
import cl from "./Home.module.scss";
import { ItemCar } from "./ItemCar/ItemCar";

export const Home = () => {
    const [filter, setFilter] = useState("");

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className={cl.container}>
            <div className={cl.blockList}>
                <h2 className={cl.titleText}>Список автомобилей</h2>
                <ul className={cl.carsList}>
                    <ItemCar filter={filter} />
                </ul>
            </div>
            <FilterForm
                filter={filter}
                handleFilterChange={handleFilterChange}
            />
        </div>
    );
};
