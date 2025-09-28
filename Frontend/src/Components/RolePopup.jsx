
import { useNavigate } from "react-router-dom";
import "./RolePopup.css"; // optional external css

const RolePopup = ({ isOpen, onClose, onSelectRole, setLogin }) => {
    const navigate = useNavigate();

    const handleSelect = (role) => {
        navigate(`/${role}/login`); // Redirect to /auth/user or /auth/seller
        onClose();
    };

    return (
        <div className="popup-overlay">
        <div className="popup-card">
            {/* Left Side Image */}
            <div className="popup-left">
            <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop"
                alt="Room Booking"
            />
            </div>

            {/* Right Side Content */}
            <div className="popup-right">
            <h2 className="popup-title">Choose Your Role</h2>
            <p className="popup-subtitle">
                Continue as a customer to book rooms or as a property seller to list
                your rooms.
            </p>

            <div className="popup-buttons">
                <button
                onClick={() => handleSelect("user")}
                className="role-btn user-btn"
                >
                Login / Register as User
                </button>
                <button
                onClick={() => handleSelect("seller")}
                className="role-btn seller-btn"
                >
                Login / Register as Property Seller
                </button>
            </div>

            <button onClick={()=> setLogin(false)} className="cancel-btn" >
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default RolePopup;
