import React from 'react';
import styles from './CityGrid.module.css';

const CityGrid = () => {
    const cities = [
        {
        name: 'Delhi',
        description: 'The Heart of India',
        image: 'https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg',
        },
        {
        name: 'Jaipur',
        description: 'The Pink City',
        image: 'https://via.placeholder.com/300x200?text=Jaipur',
        },
        {
        name: 'Mumbai',
        description: 'City of Dreams',
        image: 'https://via.placeholder.com/300x200?text=Mumbai',
        },
        {
        name: 'Varanasi',
        description: 'Spiritual City',
        image: 'https://via.placeholder.com/300x200?text=Varanasi',
        },
        {
        name: 'Goa',
        description: 'Beach Paradise',
        image: 'https://www.ravelroads.com/images/kasi/goa-tour-package.jpg',
        },
    ];

    
    return (
        <div className={styles.gridContainer}>
        {/* Left big image */}
        <div className={`${styles.item} ${styles.big}`}>
            <img src={cities[0].image} alt={cities[0].name} />
            <div className={styles.overlay}>
            <h2>{cities[0].name}</h2>
            <p>{cities[0].description}</p>
            </div>
        </div>

        {/* Right 2x2 images */}
        <div className={styles.rightGrid}>
            {cities.slice(1).map((city, index) => (
            <div key={index} className={styles.smallItem}>
                <img src={city.image} alt={city.name} />
                <div className={styles.overlay}>
                <h4>{city.name}</h4>
                <p>{city.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default CityGrid;
