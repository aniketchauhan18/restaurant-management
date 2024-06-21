import { useEffect, useMemo, useState } from "react";
import UserRestaurantCard from "./UserRestaurantCard";
import { Link, useParams } from "react-router-dom";
import { deployBaseUrl } from "../../api/dataFetcher";
import { CiSearch } from "react-icons/ci";

function User() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredLocation, setFilteredLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${deployBaseUrl}/api/v1/restaurants/`);
      const responseData = await response.json();
      console.log(responseData.data);
      setRestaurants(responseData.data);
    };
    fetchData();
  }, []);

  const { id } = useParams();

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) =>
      filteredLocation
        ? restaurant.address
            .toLowerCase()
            .includes(filteredLocation.toLowerCase())
        : true,
    );
  }, [restaurants, filteredLocation]);

  const mappedRestaurants = filteredRestaurants.map((restaurant) => {
    return (
      <Link
        to={`/user/${restaurant.userId}/${restaurant._id}/menu`}
        key={restaurant._id}
        className="w-full max-w-lg transition duration-200 border border-scarlet-100/40 bg-scarlet-100/10 ease-in-out hover:shadow rounded p-3 "
      >
        <UserRestaurantCard restaurantData={restaurant} />
      </Link>
    );
  });
  console.log(filteredRestaurants);
  return (
    <main className="p-6 min-h-screen">
      <div className="flex justify-center sm:justify-normal pb-1">
        <div className="flex sm:flex-row justify-between w-full">
          <h1 className="text-sm flex items-center sm:text-lg font-medium lg:text-xl xl:text-2xl">
            Available Restaurants
          </h1>
          <div className="flex gap-0 border pr-2 rounded-lg">
            <input
              placeholder="Search by Location"
              value={filteredLocation}
              onChange={(e) => setFilteredLocation(e.target.value)}
              className="max-w-36 sm:max-w-xl border-0"
            />
            <div className="flex items-center justify-center">
              <CiSearch className="text-base sm:text-xl text-zinc-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 mt-6">
        {mappedRestaurants}
      </div>
    </main>
  );
}

export default User;
