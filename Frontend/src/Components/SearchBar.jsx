import style from './SearchBar.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import bg_image from '../assets/185319.jpg';
import CustomDatePicker from './CustomDatePicker';


export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);

// Boolean State
  const [showSearchBarDropdown, setShowSearchBarDropdown] = useState(false);
  const [showRoomGuestDropdown, setShowRoomGuestDropdown] = useState(false);

  const handleSearch = () => {
    console.log({
      search,
      checkIn: checkIn ? checkIn.toDateString() : '',
      checkOut: checkOut ? checkOut.toDateString() : '',
      guests,
      rooms,
    });
  };

// Handles Dates
  const handleCheckIn=(e)=> {
    setCheckIn(e);
  }
  const handleCheckOut=(e)=> {
    setCheckOut(e);
  }
// Rooms and guest handling
  const decrementGuestCount=()=> {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  }
  const decrementChildrenCount=()=> {
    if (children >= 1) {
      setChildren(children - 1);
    }
  }
  const decrementRoomsCount=()=> {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  }

  return (
    <div className={style.search_bar_container}>
      <div className={style.search_input}>
        <input
          type="text"
          placeholder="Search location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setShowSearchBarDropdown(!showSearchBarDropdown)}
        />
        {showSearchBarDropdown && (
          <div className={style.search_history}>
            <div>
              <CiLocationOn size={30}></CiLocationOn>
              <p>Pune</p>
            </div>
            <div>
              <CiLocationOn size={30}></CiLocationOn>
              <p>Hadapsar</p>
            </div>
            <div>
              <CiLocationOn size={30}></CiLocationOn>
              <p>Hinjewadi</p>
            </div>
          </div>
        )}
      </div>

      <div className={style.date_picker_container}>
      <CustomDatePicker currDates={checkIn} placeholder={"Check-in-date"} onChangeDate={handleCheckIn}></CustomDatePicker>
      <CustomDatePicker currDates={checkOut} placeholder={"Check-out-date"} onChangeDate={handleCheckOut}></CustomDatePicker>
      </div>

{/* Guest And Rooms */}
      <div className={style.guests_rooms_container}>
        <div className={style.guests_rooms_input} onClick={() => setShowRoomGuestDropdown(!showRoomGuestDropdown)}>
          <LuUsers size={30}></LuUsers>
          <div>
            <p style={{fontSize:"small"}}>Guest & Rooms</p>
            <p>Guest {guests}, Rooms {rooms}</p>
          </div>
          
        </div>
        {showRoomGuestDropdown && (
          <div className={style.add_rooms_guests} tabIndex={0}  >
            <div>
              <p style={{width:"130px"}}>Adult</p>
              <CiCircleMinus size={30} onClick={decrementGuestCount} className={style.decrement_guest_rooms}></CiCircleMinus>
              <p>{guests}</p>
              <IoIosAddCircleOutline size={30} onClick={()=> setGuests(guests+1)} className={style.decrement_guest_rooms}></IoIosAddCircleOutline>
            </div>
            <div>
              <p style={{width:"130px"}}>Children</p>
              <CiCircleMinus size={30} onClick={decrementChildrenCount} className={style.decrement_guest_rooms}></CiCircleMinus>
              <p>{children}</p>
              <IoIosAddCircleOutline size={30} onClick={()=> setChildren(children+1)} className={style.decrement_guest_rooms}></IoIosAddCircleOutline>
            </div>
            <div>
              <p style={{width:"130px"}}>Rooms</p>
              <CiCircleMinus size={30} onClick={decrementRoomsCount} className={style.decrement_guest_rooms}></CiCircleMinus>
              <p>{rooms}</p>
              <IoIosAddCircleOutline size={30} onClick={()=> setRooms(rooms+1)} className={style.decrement_guest_rooms}></IoIosAddCircleOutline>
            </div>
            {children > 0 && (
              <>
              <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
              <h4>Children's ages (Required)</h4>
              {Array.from({ length: children }).map((_, index) => (
              <div key={index} style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <p>Child {index + 1}</p>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                </select>
              </div>
            ))}
              </>
            )}
            <div>
            </div>
            <div style={{width:"100%",borderTop:"1px solid rgb(206, 203, 203)",paddingTop:"10px",display:"flex",justifyContent:"center"}}>
              <button onClick={() => setShowRoomGuestDropdown(!showRoomGuestDropdown)}>Apply</button>
            </div>
          </div>
        )}
      </div>
      <button onClick={handleSearch} className={style.search}>Search</button>
    </div>
  );
}


