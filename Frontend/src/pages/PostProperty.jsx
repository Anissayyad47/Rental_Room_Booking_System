import React, { useState } from "react";
import axios from "axios";
import './PostProperty.css'

export default function PostProperty() {
    const [formData, setFormData] = useState({
        ownerId: "",
        title: "",
        description: "",
        address: "",
        furnishing: "FURNISHED",
        type: "",
        availableFor: "ANY",
        parking: "",
        rentPrice: "",
        securityDeposit: "",
        availableFrom: "",
        contact: "",
    });

    const [images, setImages] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const uploadData = new FormData();

    // ✅ Use formData instead of property
    uploadData.append(
      "property",
      new Blob([JSON.stringify(formData)], { type: "application/json" })
    );

    // Append multiple images
    images.forEach((img) => {
      uploadData.append("images", img);
    });

    // Send to backend
    const response = await fetch("http://localhost:8080/api/property/upload", {
      method: "POST",
      body: uploadData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Upload failed:", errorData);
      alert(errorData.message || "Something went wrong!");
      return;
    }

    const data = await response.json();
    console.log("✅ Property created:", data);
    alert("Property added successfully!");
  } catch (err) {
    console.error("Error uploading property:", err);
    alert("Error uploading property");
  }
};



    return (
        <div className="property-form-container">
        <h2>Add New Property</h2>
        <form className="property-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Owner ID</label>
            <input type="number" name="ownerId" value={formData.ownerId} onChange={handleChange} required />
            </div>

            <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>

            <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="form-group">
            <label>Furnishing</label>
            <select name="furnishing" value={formData.furnishing} onChange={handleChange}>
                <option value="FURNISHED">Furnished</option>
                <option value="SEMI_FURNISHED">Semi-Furnished</option>
                <option value="UNFURNISHED">Unfurnished</option>
            </select>
            </div>

            <div className="form-group">
            <label>Type</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} />
            </div>

            <div className="form-group">
            <label>Available For</label>
            <select name="availableFor" value={formData.availableFor} onChange={handleChange}>
                <option value="ANY">Any</option>
                <option value="SINGLE">Single</option>
                <option value="MARRIED">Married</option>
                <option value="FAMILY">Family</option>
            </select>
            </div>

            <div className="form-group">
            <label>Parking</label>
            <input type="text" name="parking" value={formData.parking} onChange={handleChange} />
            </div>

            <div className="form-group">
            <label>Rent Price</label>
            <input type="number" name="rentPrice" value={formData.rentPrice} onChange={handleChange} required />
            </div>

            <div className="form-group">
            <label>Security Deposit</label>
            <input type="number" name="securityDeposit" value={formData.securityDeposit} onChange={handleChange} />
            </div>

            <div className="form-group">
            <label>Available From</label>
            <input type="date" name="availableFrom" value={formData.availableFrom} onChange={handleChange} />
            </div>

            <div className="form-group">
            <label>Contact</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
            </div>

            <div className="form-group">
            <label>Upload Images</label>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
            </div>

            <button type="submit" className="submit-btn">Submit Property</button>
        </form>
        </div>
    );
}
