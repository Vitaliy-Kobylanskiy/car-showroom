import React from "react";
import cl from "./InfoForm.module.scss";

export const InfoForm = ({
    handleSubmit,
    error,
    formData,
    handleInputChange,
}) => {
    return (
        <form className={cl.infoForm} onSubmit={handleSubmit}>
            <p className={cl.infoFormComment}>Оставьте свой отзыв:</p>
            <input
                className={cl.infoInput}
                type="text"
                placeholder="Введите Ваше имя"
                name="reviewerName"
                value={formData.reviewerName}
                onChange={handleInputChange}
                required
            />
            <input
                className={cl.infoInput}
                placeholder="Введите Ваш комментарий"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                required
            />
            <input
                className={cl.infoInput}
                type="number"
                placeholder="Оцените авто от 1 до 5"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min="1"
                max="5"
                required
            />
            {error && <p className={cl.error}>{error}</p>}
            <button type="submit" className={cl.infoButton}>
                Добавить отзыв
            </button>
        </form>
    );
};
