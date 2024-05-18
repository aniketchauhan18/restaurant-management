import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [restaurants, setRestaurants] = useState([]);
  const indexRef = useRef();
  /*
    const indexRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`https://restaurantapp-7atz.onrender.com/api/v1/restaurants/admin/${userId}`)
      const data  = await response.json();
      console.log(data)
      const restnts = data.restaurants;
      const restaurantsId = restnts.map((restaurant) => restaurant._id)
      const restaurantIdArray = [restaurantsId]
      // console.log(restaurantIdArray)
      setRestaurants(data.restaurants)
      localStorage.setItem("restaurantsId", restaurantIdArray)
    }
    fetchData()
  }, [])

  const handleItemClick = (index) => {
    indexRef.current = index
    localStorage.setItem("currentRestaurant", index)
  }
  */

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/restaurants/");
      const responseData = await response.json();
      console.log(responseData.data);
      const restnts = responseData.data;
      console.log(restnts);
      const restaurantId = restnts.map((restaurant) => restaurant._id);
      console.log(restaurantId);
      const userRestaurantsIdArray = [restaurantId];
      localStorage.setItem("userRestaurantsIds", userRestaurantsIdArray);
      setRestaurants(responseData.data);
    };
    fetchData();
  }, []);

  const handleItemClick = (index) => {
    indexRef.current = index;
    localStorage.setItem("userCurrentRestaurant", index);
  };

  const mappedRestaurants = restaurants.map((restaurant, index) => {
    return (
      <Link
        to={"/menu"}
        key={index}
        className="flex basis-1/5 transition duration-200 border border-zinc-100 ease-in-out hover:shadow rounded p-3 flex-col restaurant-card h-auto"
      >
        <div className=" flex flex-1 justify-center items-center w-full mb-1">
          <div className="w-full justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full rounded"
            />
          </div>
        </div>
        <p className="text-[1rem] text-zinc-700 font-medium">
          {restaurant.name}
        </p>
        <p className="text-zinc-500">{restaurant.city}</p>
        <div className="flex justify-between">
          <p className="text-zinc-400 text-sm">{restaurant.address}</p>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex gap-4 flex-wrap justify-center restaurant-card-parent">
        {mappedRestaurants}
      </div>
    </div>
  );
}

export default User;
