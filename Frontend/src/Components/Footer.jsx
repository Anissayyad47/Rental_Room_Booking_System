import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Logo & Tagline */}
        <div className={styles.column}>
          <h2 className={styles.logo}>LocalRooms</h2>
          <p>Your perfect travel and stay partner.</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/hotels">Hotels</a></li>
            <li><a href="/bookings">My Bookings</a></li>
          </ul>
        </div>

        {/* Column 3: About / Policies */}
        <div className={styles.column}>
          <h3>About</h3>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media / App Links */}
        <div className={styles.column}>
          <h3>Connect</h3>
          <div className={styles.socials}>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
