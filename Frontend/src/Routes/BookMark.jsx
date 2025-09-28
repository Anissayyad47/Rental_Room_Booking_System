import React, { useEffect, useState } from "react";
import styles from "./BookMark.module.css";
import RoomCard from "../Components/RoomCard"; // assuming you already have this component
import axios from "axios";
import NavigationBar from "../Components/NavigationBar";

export default function BookMark() {
  const [bookmarks, setBookmarks] = useState([]);

  // Fetch bookmarked rooms from backend
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch("http://localhost:3001/get/getBookmar");
        const data = await response.json();
        setBookmarks(data);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };
    fetchBookmarks();
  }, []);

  // Remove from bookmarks
  const handleRemove = async (id) => {
    try {
      await fetch(`http://localhost:3001/get/removeBookmark/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookmarked: false }),
      });

      setBookmarks((prev) => prev.filter((room) => room._id !== id));
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  return (
    <>
    <NavigationBar></NavigationBar>
    <div className={styles.bookmarkContainer}>
      <h2 className={styles.title}>My Bookmarks</h2>

      <div className={styles.header}>
        <p>Total Bookmarks: <span>{bookmarks.length}</span></p>
      </div>

      {bookmarks.length === 0 ? (
        <p className={styles.empty}>No bookmarks yet. Start adding some!</p>
      ) : (
        <div className={styles.bookmarkGrid}>
          {bookmarks.map((room) => (
            <div key={room._id} className={styles.cardWrapper}>
              <RoomCard room={room} />
              <button 
                className={styles.removeBtn} 
                onClick={() => handleRemove(room._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}