import React, { useState } from 'react';
import styles from './HotelRoom.module.css';
import room1 from '../assets/room1.jpg';
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
const HotelRoom = ({ room }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const {
        imageUrls,
        title,
        address,
        ratings,
        reviews,
        rentPrice,
        originalPrice
    } = room;

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % imageUrls.length);
        console.log("Next : ",currentImage);
        
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
        prev === 0 ? imageUrls.length - 1 : prev - 1
        );
        console.log("Previous : ",currentImage);
    };


    return (
        <div className={styles.card}>
        {/* Image Slider */}
        <div className={styles.imageWrapper}>
            {room.imageUrls ? (<img src={room.imageUrls[currentImage]} alt={title} className={styles.image} />):(<div className={styles.image} id={styles.image_skeleton}></div>)}
            <button onClick={prevImage} className={styles.arrowLeft}><FaChevronLeft></FaChevronLeft></button>
            <button onClick={nextImage} className={styles.arrowRight}><FaChevronRight/></button>
        </div>

        {/* Room Details */}
        <div className={styles.content}>
            <div className={styles.header}>
            <span className={styles.rating}>⭐{ratings}/5 </span>
            </div>

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.location}>{address}</p>

            <div className={styles.pricing}>
            <span className={styles.discountPrice}>₹{rentPrice}</span>
            <span className={styles.originalPrice}>₹{rentPrice+2000}</span>
            </div>

            <button className={styles.dealBtn}>Check Deals</button>
        </div>
        </div>
    );
};

export default HotelRoom;
