import React from "react";
import cl from "./VehileReviews.module.scss";

export const VehileReviews = ({ reviews }) => {
    return (
        <ul className={cl.vehicleReviewsList}>
            <p>
                <strong>Отзывы:</strong>
            </p>
            {reviews && reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <li className={cl.vehicleInfoItem} key={index}>
                        <p className={cl.vehicleInfoName}>
                            <strong>Имя:</strong> {review.reviewerName}
                        </p>
                        <p className={cl.VehicleInfoComment}>
                            <strong>Комментарий:</strong> {review.comment}
                        </p>
                        <p className={cl.VehicleInfoDate}>
                            <strong>Дата:</strong> {review.date}
                        </p>
                        <p className={cl.VehicleInfoRate}>
                            <strong>Рейтинг:</strong> {review.rating}
                        </p>
                    </li>
                ))
            ) : (
                <li>Нет отзывов</li>
            )}
        </ul>
    );
};
