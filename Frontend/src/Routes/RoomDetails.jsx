import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { MdDateRange, MdOutlineMeetingRoom } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbFriends } from "react-icons/tb";
import Footer from '../Components/Footer';
import MyMap from '../Components/MyMap';
import NavigationBar from '../Components/NavigationBar';
import RoomCard from '../Components/RoomCard';
import img from '../assets/room1.jpg';
import styles from './RoomDetails.module.css';

export default function RoomDetails() {
    const scrollRef1=useRef();
    const scrollRef2=useRef();
    const scrollRef3=useRef();
    const roomId=sessionStorage.getItem("roomId")
    const [roomData, setRoomData]=useState(null);
    const [currImage, setCurrImage]=useState(0);

    useEffect(()=> {
      async function getRoomData(){
        await axios.get(`http://localhost:3001/get/data/${roomId}`)
        .then((res)=> setRoomData(res.data))
        .catch((err)=> alert("Failed to load data"))
      }
      getRoomData();
    },[])

    const scrollLeft1 = () => {
        scrollRef1.current.scrollLeft -= 300; // adjust scroll step
    };

    const scrollRight1 = () => {
        scrollRef1.current.scrollLeft += 300;
    };
    const scrollLeft2 = () => {
        scrollRef2.current.scrollLeft -= 300; // adjust scroll step
    };

    const scrollRight2 = () => {
        scrollRef2.current.scrollLeft += 300;
    };
    const scrollLeft3 = () => {
        scrollRef3.current.scrollLeft -= 300; // adjust scroll step
    };

    const scrollRight3 = () => {
        scrollRef3.current.scrollLeft += 300;
    };

    const sampleRoom = {
    title: 'Spacious 2BHK Apartment',
    roomType: '2BHK',
    location: 'Pune, Maharashtra',
    price: 12000,
    postDate: 'July 21, 2025'
    };
    console.log("Room id from room details : ",roomId);
    console.log("Room data : ",roomData);

    const handleBookMark=async()=> {
      await axios.put(`http://localhost:3001/get/addcard/${roomId}`)
      .catch((res)=> console.log("Add to card")
      ).catch((res)=> alert("Failed to add card"))
    }
  return (
    <>
    <NavigationBar></NavigationBar>
    {!roomData ? (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
    </div>
    ):(
<div className={styles.roomDetails1}>
    <div className={styles.roomDetails}>

      <div className={styles.gallaryContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>{roomData.title}</h1>
          <p className={styles.location}>{roomData.address}</p>
        </div>
        <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <img src={roomData.images[currImage]} alt="Room" />
        </div >
        <div className={styles.sideImages}>
          <img src={roomData.images[1]} alt="Room" onClick={()=> setCurrImage(1)}/>
          <img src={roomData.images[2]} alt="Room" onClick={()=> setCurrImage(2)}/>
          <img src={roomData.images[3]} alt="Room" onClick={()=> setCurrImage(3)}/>
          <img src={roomData.images[4]} alt="Room" onClick={()=> setCurrImage(4)}/>
        </div>
        </div>
      </div>


      <div className={styles.content}>

        <div className={styles.left}>
          <div className={styles.roomHeader}>
            <div>
              <p className={styles.rating}>{roomData.ratings}</p>
              <p className={styles.ratingCount}>100 Reviews</p>
            </div>
            <h1 className={styles.title}>{roomData.title}</h1>
            <p className={styles.description}>{roomData.description}</p>
          </div>
          <div>
            
            <div className={styles.heighlights}>
              <h1 className={styles.highlightsHeader}>Heightlights</h1>
              <div><CiLocationOn size={30}></CiLocationOn><p> Address: {roomData.address}</p></div>
              
              <div><IoBedOutline size={30}></IoBedOutline><p>Furnishing: {roomData.furnishing}</p></div>
              
              <div><MdOutlineMeetingRoom size={30}></MdOutlineMeetingRoom><p>Room Type: {roomData.roomType}</p></div>
              
              <div><TbFriends size={30}></TbFriends><p>Available For: {roomData.availableFor}</p></div>
              
              <div><IoCarSportOutline size={30}></IoCarSportOutline><p>Parking: {roomData.parking}</p></div>
              
              <div><RiMoneyRupeeCircleLine size={30}></RiMoneyRupeeCircleLine><p>Rent Price: ₹{roomData.rentPrice}/month</p></div>
              
              <div><RiMoneyRupeeCircleLine size={30}></RiMoneyRupeeCircleLine><p>Security Deposit: ₹{roomData.securityDeposit}</p></div>
              
              <div><MdDateRange size={30}></MdDateRange><p>Available From: {roomData.availableFrom}</p></div>
              
              <div><MdDateRange size={30}></MdDateRange><p>Posted Date:{roomData.postDate}</p></div>
              
            </div>
          </div>
        </div>


        <div className={styles.right}>
          <div className={styles.card}>

            <div className={styles.infoRow}>
              <span className={styles.label}>Posted:</span>
              <span className={styles.value}>{roomData.postDate}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Location:</span>
              <span className={styles.value}>{roomData.address}</span>
            </div>


            <h3 className={styles.sectionTitle}>Property Contact Details: {roomData.contact}</h3>


            <div className={styles.buttons}>
              <button className={styles.bookBtn}>Book Now</button>
              <button className={styles.contactBtn}>Contact Number</button>
              <button className={styles.bookmarkBtn} onClick={handleBookMark}>Add to Cart / Bookmark</button>
            </div>
          </div>
          <div className={styles.googleMap}>
              <MyMap></MyMap>
          </div>
            
        </div>
      </div>
        <div className={styles.local_room_section}>
          <div className={styles.local_room_section_header}>
              <h1>continue your searching</h1>
                
                  </div>
                    <FaChevronLeft size={50} className={styles.leftArrow} onClick={scrollLeft1}></FaChevronLeft>
                    <div ref={scrollRef1} className={styles.local_room_section_content}>
                        {[...Array(6)].map((_,i)=>(
                            <RoomCard room={sampleRoom} key={i} />
                        ))}
                    </div>
                    <FaChevronRight size={50} className={styles.rightArrow} onClick={scrollRight1}></FaChevronRight>
          </div>
    </div>
    </div>
    )}
    <Footer></Footer>
    </>
  )
}
