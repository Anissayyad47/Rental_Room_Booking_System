import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchResults.module.css";
import NavigationBar from "../Components/NavigationBar";
import SearchBar from "../Components/SearchBar";
import SearchBar_copy from "../Components/SearchBar_copy";
import Filter from "../Components/Filter";
import SearchResultRow from "../Components/SearchResultRow";
import rommImg from '../assets/room1.jpg'
import Footer from "../Components/Footer";
import axios from "axios";

export default function SearchResults() {
    const [showSearchIcon, setShowSearchIcon] = useState(false);
    const [roomData, setRoomData]=useState([]);
    
        useEffect(() => {
        const handleScroll = () => {
        const searchBarHeight = 100; // px height of your search bar
        if (window.scrollY > searchBarHeight) {
            setShowSearchIcon(true);
        } else {
            setShowSearchIcon(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(()=> {
        async function getRoomData() {
            await axios.get("http://localhost:3001/room/data")
            .then((res)=> setRoomData(res.data))
            .catch((err)=> alert("Failed to lead room data"))
        }
        getRoomData();
    },[])
    console.log(roomData);
    
return (
    <>
    <NavigationBar showSearchIcon={showSearchIcon} ></NavigationBar>
    {!roomData ? (
    <div className={styles.loaderWrapper}>
        <div className={styles.spinner}></div>
    </div>
    ):(
        <div className={styles.resultsContainer}>
        <div className={styles.searchBar}>
            <SearchBar_copy></SearchBar_copy>
        </div>
        <div className={styles.searchResult}>
            <div className={styles.filter}>
                <Filter/>
            </div>

            <div className={styles.result}>
                <div className={styles.resultTemplate}>
                    {roomData.map((room, key)=> (
                    <SearchResultRow key={key}
                    room={{
                        image: room.images[0],
                        images: [room.images[0],  room.images[1],room.images[2],room.images[3],room.images[4]],
                        title: room.title,
                        location: room.address,
                        furnishing: room.furnishing,
                        bathrooms: 2,
                        type: room.roomType,
                        tenantPreferred: room.availableFor,
                        rating: room.rating,
                        reviews: 220,
                        postedDate: room.postedDate,
                        discountPrice: room.rentPrice,
                        originalPrice: room.rentPrice+3000
                    }}
                    />
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
    )}
    
    <Footer></Footer>
    </>
);
}
