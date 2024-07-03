import AdminRestaurantCard from "./AdminRestaurantCard";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUserRestaurants } from "../../api/dataFetcher";
import { CiSearch } from "react-icons/ci";

function AdminRestaurants() {
  const { id } = useParams();
  const [filterByName, setFilterByName] = useState("");

  const {
    data: restaurants,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["restaurantsData", id],
    queryFn: () => fetchUserRestaurants(id),
    staleTime: Infinity,
  });

  // const filteredRestaurants = useMemo(() => {
  //   return restaurants.filter((restaurant) =>
  //     filteredLocation
  //       ? restaurant.address
  //           .toLowerCase()
  //           .includes(filteredLocation.toLowerCase())
  //       : true,
  //   );
  // }, [restaurants, filteredLocation]);

  const filteredRestaurants = useMemo(() => {
    return restaurants?.filter((restaurant) => {
      return filterByName
        ? restaurant.name.toLowerCase().includes(filterByName.toLowerCase())
        : true;
    });
  }, [filterByName, restaurants]);

  const renderContent = (() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (filteredRestaurants) {
      console.log(filteredRestaurants, "ss");
      return filteredRestaurants?.map((restaurant) => {
        return (
          <Link
            to={`/admin/${id}/${restaurant._id}/menu`}
            key={restaurant._id}
            className="w-full max-w-lg transition duration-200 border border-scarlet-100/40 bg-scarlet-100/10 ease-in-out hover:shadow rounded p-3 "
          >
            <AdminRestaurantCard restaurantData={restaurant} />
          </Link>
        );
      });
    }
  })();

  console.log(restaurants);

  return (
    <div className="flex font-inter justify-center flex-wrap p-5 gap-3 flex-col">
      <div className="flex justify-center sm:justify-normal pb-1">
        <div className="flex sm:flex-row justify-between w-full">
          <h1 className="text-sm flex items-center sm:text-lg font-medium lg:text-xl xl:text-2xl">
            Available Restaurants
          </h1>
          <div className="flex gap-0 border pr-2 rounded-lg">
            <input
              placeholder="Search by Name"
              className="max-w-36 sm:max-w-xl border-0"
              value={filterByName}
              onChange={(e) => setFilterByName(e.target.value)}
            />
            <div className="flex items-center justify-center">
              <CiSearch className="text-base sm:text-xl text-zinc-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center">
        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3 max-w-full ">
          {renderContent}
        </div>
      </div>
    </div>
  );
}

export default AdminRestaurants;
