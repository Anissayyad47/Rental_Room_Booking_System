import axios from "axios";
import React, { useState } from "react";

export default function UpdateRoomForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    furnishing: "",
    roomType: "",
    availableFor: "",
    parking: "",
    rentPrice: "",
    securityDeposit: "",
    availableFrom: "",
    images: [],
    ratings: "",
    reviews: "",
    contact: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append text fields except postDate
    for (const key in formData) {
      if (key !== "images") {
        data.append(key, formData[key]);
      }
    }

    // Append postDate automatically (day-month-year)
    const today = new Date();
    const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    data.append("postDate", formattedDate);

    // Append images
    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]);
    }

    try {
      await axios.post("http://localhost:3001/upload/formData", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form data uploaded successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Error uploading form data ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-[90%] md:w-[70%] lg:w-[50%] space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Update Room Details
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows={3}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="furnishing"
            value={formData.furnishing}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Furnishing</option>
            <option value="furnished">Furnished</option>
            <option value="semi-furnished">Semi-Furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </select>

          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Room Type</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="apartment">Apartment</option>
          </select>

          <select
            name="availableFor"
            value={formData.availableFor}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Available For</option>
            <option value="family">Family</option>
            <option value="bachelor">Bachelor</option>
            <option value="any">Any</option>
          </select>

          <select
            name="parking"
            value={formData.parking}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Parking</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="rentPrice"
            value={formData.rentPrice}
            onChange={handleChange}
            placeholder="Rent Price"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="number"
            name="securityDeposit"
            value={formData.securityDeposit}
            onChange={handleChange}
            placeholder="Security Deposit"
            className="w-full border p-3 rounded-lg"
          />
        </div>
        <h1>Ratings and reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            placeholder="Ratings"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="number"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            placeholder="Reviews"
            className="w-full border p-3 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="w-full border p-3 rounded-lg"
          />
        </div>
        {/* Available From */}
        <div>
          <label className="block text-sm font-medium mb-2">Available From</label>
          <input
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium mb-2">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Update Room
        </button>
      </form>
    </div>
  );
}
