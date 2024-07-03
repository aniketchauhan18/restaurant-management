import {
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useMemo, useState } from "react";
import UserRestaurantCard from "./UserRestaurantCard";
import { Link, useParams } from "react-router-dom";
import { fetchRestaurants } from "../../api/dataFetcher";
import { CiSearch } from "react-icons/ci";

function User() {
  // const [restaurants, setRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredLocation, setFilteredLocation] = useState("");
  const { id } = useParams();

  const {
    data: restaurantData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["restaurants", currentPage],
    queryFn: () => fetchRestaurants(currentPage),
    keepPreviousData: true,
    staleTime: Infinity,
  });
  const queryClient = useQueryClient();

  // const { data } = useInfiniteQuery({
  //   queryKey: ["restaurants", currentPage],
  //   queryFn: ({ pageParam = currentPage }) => fetchRestaurants(pageParam),
  // })
  // console.log(data)
  const totalPages = restaurantData?.meta?.totalPages;
  const isLastPage = currentPage === totalPages;

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    queryClient.invalidateQueries(["restaurants"]);
  };

  const filteredRestaurants = useMemo(() => {
    return restaurantData?.data.filter((restaurant) =>
      filteredLocation
        ? restaurant?.address
            .toLowerCase()
            .includes(filteredLocation.toLowerCase())
        : true,
    );
  }, [restaurantData, filteredLocation]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errr</div>;
  console.log(filteredRestaurants.length);

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
      {mappedRestaurants.length > 0 ? (
        <div className="flex flex-col">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4 mt-6">
            {mappedRestaurants}
          </div>
          <div className="mt-5 flex justify-end items-center text-zinc-800">
            <div className="flex gap-3">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 bg-neutral-50/20 text-zinc-700 hover:bg-neutral-50/20 hover:cursor-pointer hover:text-zinc-600"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage}
                className="px-2 bg-neutral-50/20 text-zinc-700 hover:bg-neutral-50/20 hover:cursor-pointer hover:text-zinc-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center w-full mt-10">No restaurant found</div>
      )}
    </main>
  );
}

export default User;
