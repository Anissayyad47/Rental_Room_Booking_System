
    import styles from "./LoginOwner.module.css";
    import { useState } from "react";
    import google from '../assets/google.svg'
    import axios from "axios";
    import { useNavigate } from "react-router-dom";

    export default function LoginUser({ setLogin }) {
    const [activeTab, setActiveTab] = useState("login"); // 'login' or 'signup'.
    const navigation=useNavigate();

    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })

    const [userData, setUserData]=useState({
        name:"",
        email:"",
        password:"",
    })

    const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
        ...prev,
        [name]: value,
    }));
    };

    const handleLoginSubmit = async (e) => {
    e.preventDefault(); // ✅ now works
    console.log("Login details:", loginData);

        try {
            const res = await axios.post(
            "http://localhost:8080/api/auth/user/login",
            loginData
            );
            console.log("Response from backend:", res.data);
            alert(res.data.message)
            navigation("/")
        } catch (err) {
            console.error("Failed login:", err);
            alert(err.response.data.message)
        }
    };
    
    const handleChange=(e)=> {
        const {name, value}=e.target;
        setUserData((prev)=> ({
            ...prev, [name]:value
        }))
    }
    const handleSubmit=async (e)=>{
        console.log("User details : ",userData);
        e.preventDefault();
    await axios.post("http://localhost:8080/api/auth/user/register", userData)
    .then((res) => alert(res.data.message))
    .catch((err) => alert("Failed user registration: "+err.response.data.message));
    }

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
            {/* <button className={styles.closeBtn} onClick={()=> setLogin(false)}>
                ✕
            </button> */}

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
                    <input type="email" placeholder="Email" name="email" className={styles.input} onChange={handleLoginChange} />
                    <input type="password" placeholder="Password" name="password" className={styles.input} onChange={handleLoginChange} />
                    <button type="button"  className={styles.loginBtn} onClick={handleLoginSubmit}>
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
                    <input type="text" placeholder="Full Name" name="name" className={styles.input} onChange={handleChange} />
                    <input type="email" placeholder="Email" name="email" className={styles.input} onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" className={styles.input} onChange={handleChange} />
                    <button   className={styles.signupBtn} onClick={handleSubmit}>
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
