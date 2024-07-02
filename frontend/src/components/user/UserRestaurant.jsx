import { useParams } from "react-router-dom";
import UserMenuCard from "./UserMenuCard";
import { useQuery } from "@tanstack/react-query";
import { fetchUserMenu, fetchRestaurantById } from "../../api/dataFetcher";

function UserRestaurant() {
  const { restaurantId } = useParams();
  const {
    data: restaurantData,
    error: restaurantError,
    isLoading: restaurantIsLoading,
  } = useQuery({
    queryKey: ["restaurantData", restaurantId],
    queryFn: () => fetchRestaurantById(restaurantId),
    staleTime: Infinity,
  });
  console.log(restaurantData);

  const {
    data: menuData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["menuData", restaurantId],
    queryFn: () => fetchUserMenu(restaurantId),
    staleTime: Infinity,
  });

  const renderContent = (() => {
    if (isLoading || restaurantIsLoading) {
      return <div>Loading...</div>;
    }

    if (error || restaurantError) {
      return <div>Error: {error.message}</div>;
    }

    if (menuData && menuData.length > 0) {
      return menuData.map((menu) => (
        <div key={menu._id} className="flex justify-center">
          <UserMenuCard
            name={menu.name}
            price={menu.price}
            description={menu.description}
          />
        </div>
      ));
    }

    return <div>No menu Added</div>;
  })();

  return (
    <div className="flex font-inter flex-col  bg-cover bg-center p-5">
      <div className="w-full mt-4 flex flex-col justify-center">
        <div className="px-3 border-b py-3">
          <img
            className="rounded-lg mb-1 h-[300px] w-full object-cover"
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <p className="text-3xl font-semibold">{restaurantData?.name}</p>
          <p className="text-xl text-stone-700">
            {restaurantData?.address}, {restaurantData?.city}
          </p>
          <p className="text-lg text-stone-500">
            {restaurantData?.state}, {restaurantData?.country}
          </p>
        </div>
        <p className="p-3 text-xl font-semibold">Menus Available</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-3 gap-3 w-full">
          {renderContent}
        </div>
      </div>
    </div>
  );
}

export default UserRestaurant;
