import { useEffect, useState } from "react";
import RestaurantCard from '../common/RestaurantCard'
import { Link, useParams } from 'react-router-dom'

function User() {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/restaurants/");
      const responseData = await response.json();
      console.log(responseData.data);
      setRestaurants(responseData.data);
    };
    fetchData();
  }, []);

  const { id } = useParams()

  const mappedRestaurants = restaurants.map((restaurant) => {
    return (
      <Link
      to={`/user/${id}/${restaurant._id}/menu`}
        key={restaurant._id}
        className="flex basis-1/5 transition duration-200 border border-zinc-100 ease-in-out hover:shadow rounded p-3 flex-col restaurant-card h-auto"
      >
        <RestaurantCard restaurantData={restaurant} />
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
