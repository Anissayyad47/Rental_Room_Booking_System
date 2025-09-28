import styles from './NavigationBar.module.css';
import { IoMdDownload } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import SearchBar_copy from './SearchBar_copy';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar({showSearchIcon,setLogin}) {
    const [menu,setMenu]=useState(false);
    const [searchBar, setSearchBar]=useState(false);
    const navigation=useNavigate();

    const handleLogin=()=> {
        console.log("Login Clicked : ");
        setLogin(true);
        
    }
    const handleBookMark=()=> {
        console.log("Bookmarks");
        navigation("/bookmarks")
    }
    return (
        <>
        <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
        {/* Logo */}
        <div className={styles.logo}>
            <h2 onClick={()=> navigation("/")}>LocalRooms </h2>
        </div>


        {/* Navigation Links */}
        <div className={styles.navLinks}>
            {showSearchIcon && (<div className={styles.searchBar} onClick={()=> setSearchBar(prev => !prev)}><IoIosSearch className={styles.searchIcon} size={25}/>
            </div>)}
            <div className={styles.getApp}> <IoMdDownload size={20} ></IoMdDownload><p>Get the App</p></div>
            <div> <GiFamilyHouse></GiFamilyHouse><p>Post Property</p></div>
            <div> <IoMdHelpCircleOutline size={20}></IoMdHelpCircleOutline><p>Help</p></div>
            <div onClick={handleBookMark}> <FaRegBookmark></FaRegBookmark><p>Bookmark</p></div>
            <button className={styles.loginBtn} onClick={handleLogin}>Sign Up / Login</button>
        </div>
        <div className={styles.menu}>
            <IoIosMenu size={30} onClick={()=> setMenu(prev => !prev)}></IoIosMenu>
        {menu && (
            <div className={styles.menu_container}>
                
                <div> <IoMdDownload size={20} ></IoMdDownload><p>Get the App</p></div>
                <div> <GiFamilyHouse></GiFamilyHouse><p>Post Property</p></div>
                <div> <IoMdHelpCircleOutline size={20}></IoMdHelpCircleOutline><p>Help</p></div>
                <div onClick={handleBookMark}> <FaRegBookmark></FaRegBookmark ><p >Bookmark</p></div>
                <button className={styles.loginBtn} onClick={handleLogin}>Sign Up / Login</button>
            </div>
        )}
        </div>
        </div>
        {searchBar && showSearchIcon && (
            <div className={styles.searchBar_in}><SearchBar_copy></SearchBar_copy></div>
        )}
        </nav>
        </>
        
    )
}
































