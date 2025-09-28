import React from 'react'
import styles from './DownloadApp.module.css';
import playstoreIcon from '../assets/playStore.webp';
import appstoreIcon from '../assets/appStore.webp';
import appstoreIcon1 from '../assets/appStore1.png';
import map3 from '../assets/WorldImage.jpg'
export default function DownloadApp() {
return (
        <div className={styles.downloadApp_container}>
            <div className={styles.map}>
                <img src={map3}></img>
            </div>
            <div className={styles.container}>
            <h2 className={styles.title}>Get Our App</h2>
            <p className={styles.subtitle}>Download from your favorite store</p>
            <div className={styles.buttons}>
                <div>
                    <img src={playstoreIcon}></img>
                    <img src={appstoreIcon1}></img>
                </div>
            </div>
            </div>
        </div>
)
}



