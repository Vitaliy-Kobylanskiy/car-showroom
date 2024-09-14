import React from "react";
import cl from "./FilterForm.module.scss";

export const FilterForm = ({ filter, handleFilterChange }) => {
    return (
        <form className={cl.form}>
            <h2 className={cl.formTitle}>Введите название авто:</h2>
            <input
                className={cl.input}
                type="text"
                placeholder="Поиск по названию..."
                value={filter}
                onChange={handleFilterChange}
            />
        </form>
    );
};
