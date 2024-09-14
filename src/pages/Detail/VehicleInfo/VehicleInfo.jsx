import React, { useState, useEffect } from "react";
import InfoCar from "./InfoCar/InfoCar";
import { InfoForm } from "./InfoForm/InfoForm";
import cl from "./VehicleInfo.module.scss";
import { VehileReviews } from "./VehileReviews/VehileReviews";

export const VehicleInfo = ({ vehicle }) => {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({
        reviewerName: "",
        comment: "",
        date: new Date().toLocaleDateString(),
        rating: "",
    });
    const [error, setError] = useState("");

    useEffect(() => {
        const storedReviews = localStorage.getItem(`reviews_${vehicle.id}`);
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        } else {
            setReviews(vehicle.reviews || []);
        }
    }, [vehicle.id]);

    useEffect(() => {
        localStorage.setItem(`reviews_${vehicle.id}`, JSON.stringify(reviews));
    }, [reviews, vehicle.id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const ratingValue = parseFloat(formData.rating);
        if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
            setError("Рейтинг должен быть числом от 1 до 5");
            return;
        }

        setError("");

        const newReview = { ...formData, rating: ratingValue };
        setReviews((prevReviews) => [...prevReviews, newReview]);

        setFormData({
            reviewerName: "",
            comment: "",
            date: new Date().toLocaleDateString(),
            rating: "",
        });
    };

    return (
        <div className={cl.container}>
            <InfoCar vehicle={vehicle} />
            <div className={cl.vehicleInfoContainer}>
                <VehileReviews reviews={reviews} />
                <InfoForm
                    handleSubmit={handleSubmit}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    error={error}
                />
            </div>
        </div>
    );
};
