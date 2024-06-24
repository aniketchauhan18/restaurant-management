import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail, MdFoodBank } from "react-icons/md";

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
      <div className="flex gap-1 text-zinc-800">
        <div className="flex items-center">
          <MdFoodBank />
        </div>
        <p className=" text-base">{name}</p>
      </div>
      <div className="text-zinc-700 text-sm flex gap-1.5">
        <div className="flex items-center">
          <FaMapLocationDot className="text-zinc-600" />
        </div>
        <p>{address}, </p>
        <p>{state}</p>
      </div>
      <div className="text-zinc-500 text-sm flex gap-1">
        <div className="flex items-center ">
          <MdEmail className="" />
        </div>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default AdminRestaurantCard;
