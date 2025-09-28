import styles from "./SearchResultRow.module.css";
import { MdOutlineBathtub } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";


export default function SearchResultRow({ room }) {
  return (
    <div className={styles.rowCard}>
      {/* Left: Image Section */}
      <div className={styles.imageSection}>
        <img
          src={room.image}
          alt={room.title}
          className={styles.mainImage}
        />
        <div className={styles.thumbnails}>
          {room.images?.slice(1, 4).map((img, index) => (
            <img key={index} src={img} alt={`thumb-${index}`} />
          ))}
        </div>
      </div>

      {/* Middle: Info Section */}
      <div className={styles.infoSection}>
        <h2 className={styles.title}>{room.title}</h2>
        <p className={styles.location}>{room.location}</p>

        {/* 2x2 Grid for Details */}
        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            {/* Icon placeholder */}
            <span className={styles.icon}><IoBedOutline className={styles.reactIcon} ></IoBedOutline></span>
            <span className={styles.label}>Furnishing:</span>
            <span className={styles.value}>{room.furnishing}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.icon}><MdOutlineBathtub className={styles.reactIcon} ></MdOutlineBathtub></span>
            <span className={styles.label}>Bathrooms:</span>
            <span className={styles.value}>{room.bathrooms}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.icon}><BsPeople className={styles.reactIcon} ></BsPeople></span>
            <span className={styles.label}>Room Type:</span>
            <span className={styles.value}>{room.type}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.icon}><MdOutlineFamilyRestroom className={styles.reactIcon} ></MdOutlineFamilyRestroom></span>
            <span className={styles.label}>Tenant Preferred:</span>
            <span className={styles.value}>{room.tenantPreferred}</span>
          </div>
        </div>

        <div className={styles.rating}>
          ⭐ {room.rating} ({room.reviews} reviews)
        </div>
      </div>

      {/* Right: Price & Actions */}
      <div className={styles.actionSection}>
        <p className={styles.postedDate}>
          Posted: {new Date(room.postedDate).toLocaleDateString()}
        </p>
        <div className={styles.priceWrapper}>
          <span className={styles.discountPrice}>₹{room.discountPrice}</span>
          {room.originalPrice && (
            <span className={styles.originalPrice}>₹{room.originalPrice}</span>
          )}
        </div>
        <div className={styles.buttons}>
          <button className={styles.detailsBtn}>More Details</button>
          <button className={styles.cartBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
