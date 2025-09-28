import React, { useState } from 'react'
import { useRef } from 'react';
import style from "./Home.module.css";
import NavigationBar from '../Components/NavigationBar.jsx';
import SearchBar from '../Components/SearchBar.jsx';
import RoomCard from '../Components/RoomCard.jsx';
import HotelRoom from '../Components/HotelRoom.jsx'; // Assuming you want to use HotelRoom component as well
import CityGrid from '../Components/CityGrid.jsx'; // Assuming you want to use CityGrid component as well
import TravalIndiaWorld from '../Components/TravalIndiaWorld.jsx';
import DownloadApp from '../Components/DownloadApp.jsx';
import Footer from '../Components/Footer.jsx';
import SearchBar_copy from '../Components/SearchBar_copy.jsx';
import map1 from '../assets/map1.jpg'; // Example image, replace with actual image path
import map2 from '../assets/map2.jpg'; // Example image, replace with actual image path
import map3 from '../assets/WorldImage.jpg'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import Login from '../Components/Login.jsx';
import { set } from 'date-fns';
import axios from 'axios';
import { useEffect } from 'react';
import RolePopup from '../Components/RolePopup.jsx';

export default function Home() {
    const [roomData, setRoomData]=useState([]);
    const [ login, setLogin]=useState(false);
    const scrollRef1=useRef();
    const scrollRef2=useRef();
    const scrollRef3=useRef();
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
    const sampleHotelRoom = {
    images: [
        'https://via.placeholder.com/400x250?text=Room+1',
        'https://via.placeholder.com/400x250?text=Room+2',
        'https://via.placeholder.com/400x250?text=Room+3',
    ],
    title: 'Luxury 1BHK Suite',
    location: 'Mumbai, India',
    rating: 8.5,
    reviewCount: 120,
    discountPrice: 2200,
    originalPrice: 3000,
    };
    useEffect(()=> {
        async function getRoomData() {
            await axios.get("http://localhost:8080/api/property/get")
            .then((res)=> setRoomData(res.data))
            .catch((err)=> alert("Failed to lead room data"))
        }
        getRoomData();

    },[])

        
    console.log("Room Data : ",roomData);


    return (
        <>
        <NavigationBar setLogin={setLogin}/>
        <div className={style.homeContainer}>
            <div className={style.homeContent_in}>
                <div className={style.search_bar_section}>
                    <SearchBar/>
                </div>
                {/* <div className={style.search_history_section}>
                    No History
                </div> */}
                <div className={style.local_room_section}>
                    <div className={style.local_room_section_header}>
                        <h1 >Find Your Perfect Stay Nearby</h1>
                        <p>Discover comfortable and affordable rooms within walking distance.</p>
                    </div>
                    <FaChevronLeft size={50} className={style.leftArrow} onClick={scrollLeft1}></FaChevronLeft>
                    <div ref={scrollRef1} className={style.local_room_section_content}>
                        {/* {[...Array(6)].map((_,i)=>(
                            <RoomCard room={sampleRoom} key={i}/>
                        ))} */}
                        {roomData.map((room, key)=> (
                            <RoomCard room={room} key={key} />
                        ))}
                    </div>
                    <FaChevronRight size={50} className={style.rightArrow} onClick={scrollRight1}></FaChevronRight>
                </div>
                <div className={style.local_room_section}>
                    <div className={style.local_room_section_header}>
                        <h1>Discover your new favourite stay in you city</h1>
                        <p>Find the best deals and comfortable stays in Pune.</p>
                    </div>
                    <FaChevronLeft size={50} className={style.leftArrow} onClick={scrollLeft2}></FaChevronLeft>
                    <div ref={scrollRef2} className={style.local_room_section_content}>
                        {/* {[...Array(6)].map((_,i)=>(
                            <RoomCard room={sampleRoom} key={i} />
                        ))} */}
                        {roomData.map((room, key)=> (
                            <RoomCard room={room} key={key}/>
                        ))}
                    </div>
                    <FaChevronRight size={50} className={style.rightArrow} onClick={scrollRight2}></FaChevronRight>
                </div>
                <div className={style.local_room_section}>
                    <div className={style.local_room_section_header}>
                        <h1>Best Hotel & Room Deals in Your Area</h1>
                        <p> We’ve gathered the top-rated rooms at unbeatable prices, so you can book your perfect stay with ease.</p>
                    </div>
                    <FaChevronLeft size={50} className={style.leftArrow3} onClick={scrollLeft3}></FaChevronLeft>
                    <div ref={scrollRef3} className={style.local_room_section_content}>
                        {/* {[...Array(6)].map((_,i)=>(
                            <HotelRoom room={sampleHotelRoom} key={i} />
                        ))} */}
                        {roomData.map((room, key)=> (
                            <HotelRoom room={room} key={key}/>
                        ))}
                    </div>
                    <FaChevronRight size={50} className={style.rightArrow} onClick={scrollRight3}></FaChevronRight>
                </div>
                <div className={style.city_room_section}>
                    <div className={style.local_room_section_header}>
                        <h1>Explore India Your Way</h1>
                        <p>From bustling cities to serene escapes — find your perfect stay anywhere in India.</p>
                    </div>
                    <TravalIndiaWorld></TravalIndiaWorld>
                </div>
            </div>
        </div>
        <div className={style.world_map}>
            <DownloadApp></DownloadApp>
        </div>
        {login && ( <RolePopup setLogin={setLogin}></RolePopup> )}
        <Footer/>
        </>
    )
}

