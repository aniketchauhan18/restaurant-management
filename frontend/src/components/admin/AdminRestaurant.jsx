import { useEffect, useState } from "react";
import RestaurantCard from "../common/RestaurantCard";
import { Link, useParams } from "react-router-dom";

function AdminRestaurant() {
  const [restaurants, setRestaurants] = useState([]);

  const { id } = useParams()


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/restaurants/admin/${id}`,
      );
      const responseData = await response.json();
      const data = responseData.data;
      // console.log(restaurantIdArray)
      setRestaurants(data);
    };
    fetchData();
  }, [id]);

 
  const mappedRestaurants = restaurants.map((restaurant) => {
    return (
      <Link to={`/admin/${id}/${restaurant._id}/menu`}
        key={restaurant._id}
        className="flex w-[300px] h-[300px] rounded-lg border border-zinc-200 p-3 flex-col hover:shadow-lg"
      >
        <RestaurantCard restaurantData={restaurant} />
      </Link>
    );
  });

  return (
    <div className="flex font-inter justify-center flex-wrap p-3 gap-3 flex-col">
      <p className="flex justify-center items-center font-lato text-4xl font-semi-bold">
        Your Restaurants
      </p>
      <div className="flex justify-center flex-wrap p-3 gap-3">
        {mappedRestaurants}
      </div>
    </div>
  );
}

export default AdminRestaurant;
