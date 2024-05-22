import { useParams } from "react-router-dom";
import UserMenuCard from "./UserMenuCard";
import { useQuery } from "@tanstack/react-query";
import { fetchUserMenu } from "../../api/dataFetcher";

function UserMenu() {
  const { restaurantId } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `http://localhost:3000/api/v1/menus/${restaurantId}`,
  //     );
  //     const responseData = await response.json();
  //     console.log(responseData.data._id)
  //     setMenuData(responseData.data);
  //     if (response.ok && responseData.data.length !== 0) {
  //       setShowMenuData(true);
  //     }
  //   };
  //   fetchData();
  // }, [restaurantId]);
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
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (menuData && menuData.length > 0) {
      return menuData.map((menu) => (
        <div key={menu._id} className="flex">
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
    <div className="flex font-inter flex-col h-dvh bg-cover bg-center">
      <div className="w-full mt-4 flex">
        <div className="flex justify-center items-center flex-wrap p-3 gap-3">
          <div>{renderContent}</div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
