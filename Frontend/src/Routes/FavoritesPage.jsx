import React, { useState } from "react";

export default function FavoritesPage() {
  // Dummy data (replace with your property template + real data later)
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Luxury Beachside Villa",
      location: "Goa, India",
      price: "₹8,500/night",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Cozy Mountain Cabin",
      location: "Manali, India",
      price: "₹4,200/night",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Modern City Apartment",
      location: "Mumbai, India",
      price: "₹6,000/night",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&auto=format&fit=crop",
    },
  ]);

  // Remove from favorites
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Your Favorite Properties
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">No favorites yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <button
                  onClick={() => removeFavorite(property.id)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition duration-200"
                >
                  ✕
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {property.title}
                </h2>
                <p className="text-gray-500">{property.location}</p>
                <p className="mt-2 text-blue-600 font-semibold">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
