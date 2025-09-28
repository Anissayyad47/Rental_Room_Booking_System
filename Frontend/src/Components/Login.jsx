import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import google from '../assets/google.svg'
export default function Login({ setLogin }) {
const [activeTab, setActiveTab] = useState("login"); // 'login' or 'signup'


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Left section - image */}
        <div className={styles.leftSection}>
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"
            alt="Hotel Room"
            className={styles.image}
          />
        </div>

        {/* Right section */}
        <div className={styles.rightSection}>
          <button className={styles.closeBtn} onClick={()=> setLogin(false)}>
            ✕
          </button>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "login" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Sign In
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "signup" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Create Account
            </button>
          </div>

          {/* Form container */}
          <div className={styles.formContainer}>
            {activeTab === "login" ? (
              <>
                <h2 className={styles.title}>Welcome Back</h2>
                <p className={styles.subtitle}>Sign in to continue</p>
                <form className={styles.form}>
                  <input type="email" placeholder="Email" className={styles.input} />
                  <input type="password" placeholder="Password" className={styles.input} />
                  <button type="submit" className={styles.loginBtn}>
                    Sign In
                  </button>
                </form>
                                <div className={styles.socialSection}>
                  <p>Or sign up with</p>
                  <div className={styles.socialButtons}>
                    <div className={styles.google}><img src={google}></img>Sign in with Google</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className={styles.title}>Create Account</h2>
                <p className={styles.subtitle}>Join us and start booking now!</p>
                <form className={styles.form}>
                  <input type="text" placeholder="Full Name" className={styles.input} />
                  <input type="email" placeholder="Email" className={styles.input} />
                  <input type="password" placeholder="Password" className={styles.input} />
                  <button type="submit" className={styles.signupBtn}>
                    Sign Up
                  </button>
                </form>

                <div className={styles.socialSection}>
                  <p>Or sign up with</p>
                  <div className={styles.socialButtons}>
                    <div className={styles.google}><img src={google}></img>Sign in with Google</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
