import React from "react";

function AdminRestaurantCard({ restaurantData }) {
  const {
    name,
    _id,
    state,
    email,
    address,
    country,
    city,
    description,
    number,
    websiteURL,
  } = restaurantData;
  console.log(websiteURL);

  return (
    <div className="flex flex-col font-inter">
      <img
        className="rounded-lg mb-1"
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <p className="text-zinc-900 text-sm">{name}</p>
      <p className="text-zinc-700 text-xs">{address}</p>
      <p className="text-gray-500 text-xs">{state}</p>
    </div>
  );
}

export default AdminRestaurantCard;
