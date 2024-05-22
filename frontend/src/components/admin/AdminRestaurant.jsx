import RestaurantCard from "../common/RestaurantCard";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminRestaurats } from "../../api/dataFetcher";

function AdminRestaurant() {
  const { id } = useParams();

  const {
    data: restaurants,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["restaurantsData", id],
    queryFn: () => fetchAdminRestaurats(id),
    staleTime: Infinity,
  });

  const renderContent = (() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (restaurants && restaurants.length > 0) {
      return restaurants.map((restaurant) => {
        return (
          <Link
            to={`/admin/${id}/${restaurant._id}/menu`}
            key={restaurant._id}
            className="flex w-[300px] h-[300px] rounded-lg border border-zinc-200 p-3 flex-col hover:shadow-lg"
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        );
      });
    }
  })();

  console.log(restaurants);

  return (
    <div className="flex font-inter justify-center flex-wrap p-3 gap-3 flex-col">
      <p className="flex justify-center items-center font-lato text-4xl font-semi-bold">
        Your Restaurants
      </p>
      <div className="flex justify-center flex-wrap p-3 gap-3">
        {renderContent}
      </div>
    </div>
  );
}

export default AdminRestaurant;
