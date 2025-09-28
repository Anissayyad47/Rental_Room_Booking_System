import React from 'react';
import styles from './RoomCard.module.css';
import image1 from '../assets/swordigo.jpg'; // Example image, replace with actual image path
import room1 from '../assets/room1.jpg'; // Example image, replace with actual image path
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const navigation=useNavigate();
  const {
    image,
    title,
    roomType,
    address,
    rentPrice,
    postDate
  } = room;
  const handleButton=()=> {
  console.log("Room image .",room.images[0]);
  }

  // if(room.imageUrls==null){
  //   console.log("Image is null");
    
  // }else {
  //   console.log("Image is not null");
  //   // for(let i=0;i<room.imageUrls.length;i++){
  //   //   console.log(room.imageUrls[i]);
      
  //   // }
  // }

  const handleRoomDetails=()=> {
        sessionStorage.setItem("roomId",room._id);
        navigation("/roomDetails")
        console.log("Room id ",room._id);
  }
  
  return (
    <div className={styles.card} onClick={handleRoomDetails}>
      <div className={styles.imageWrapper}>
        {room.imageUrls.length>0 ? (<img src={room.imageUrls[0]} alt={title} className={styles.image} />):(<div className={styles.image} id={styles.image_skeleton}></div>)}
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.type}>{roomType}</p>
        <p className={styles.location}>{address}</p>
        <p className={styles.price} onClick={handleButton}>₹{rentPrice} / month</p>
      </div>

      <div className={styles.date}>
        <p>Posted on:</p>
        <p>{postDate}</p>
      </div>
    </div>
  );
};


export default RoomCard;
