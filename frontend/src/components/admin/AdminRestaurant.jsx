import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurantById } from "../../api/dataFetcher";
import AdminMenu from "./AdminMenu";
function AdminRestaurant() {
  const { adminId, restaurantId } = useParams();
  console.log(adminId, restaurantId);

  const {
    data: restaurant,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["restaurantsData", restaurantId],
    queryFn: () => fetchRestaurantById(restaurantId),
    staleTime: Infinity,
  });
  const renderContent = (() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (restaurant) {
      return (
        <div className="p-10">
          <img
            className="rounded-lg mb-1 h-[300px] w-full object-cover"
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p className="text-3xl font-semibold">{restaurant.name}</p>
          <p className="text-xl text-stone-800">
            {restaurant.address}, {restaurant.city}
          </p>
          <p className="text-lg text-stone-600">
            {restaurant.state}, {restaurant.country}
          </p>
        </div>
      );
    }
  })();

  return (
    <div>
      <div className="w-full flex flex-col">
        <div>{renderContent}</div>
        <div>
          <AdminMenu />
        </div>
      </div>
    </div>
  );
}

export default AdminRestaurant;
