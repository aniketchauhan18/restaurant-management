import { fetchMenuData } from "../../api/dataFetcher";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CreateMenuModal from "./CreateMenuModal";
import AdminMenuCard from "./AdminMenuCard";

function AdminMenu() {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const { adminId, restaurantId } = useParams();
  console.log(restaurantId);

  const navigate = useNavigate();
  const {
    data: menuData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["menuData", restaurantId],
    queryFn: () => fetchMenuData(restaurantId),
    staleTime: Infinity,
  });
  console.log(menuData);
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
          <AdminMenuCard
            name={menu.name}
            price={menu.price}
            description={menu.description}
            menuId={menu._id}
          />
        </div>
      ));
    }

    return <div>No menu Added</div>;
  })();

  const closeModal = () => {
    setShowMenuModal(false);
    navigate(`/admin/${adminId}/${restaurantId}/menu`);
  };

  console.log(menuData);
  const linkClasses =
    "bg-scarlet-400 text-white py-1 px-2 rounded-sm hover:bg-scarlet-500 transition ease-in-out duration-300 font-inter";

  console.log(adminId, restaurantId);

  return (
    <div className="flex font-inter flex-col bg-gray-50 min-h-screen mx-8 p-3">
      <div className="flex justify-between">
        <p className="text-3xl ml-4">Menus</p>
        <button onClick={() => setShowMenuModal(true)} className={linkClasses}>
          Add Menu
        </button>
      </div>
      <div className="w-full mt-4 flex">
        <div className="flex flex-col  gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3 max-w-full">
            {renderContent}
          </div>
          {/* <div className="flex ml-3">
            <button
              onClick={() => setShowMenuModal(true)}
              className={linkClasses}
            >
              Add Menu
            </button>
          </div> */}
        </div>
      </div>
      <div>{showMenuModal && <CreateMenuModal closeModal={closeModal} />}</div>
    </div>
  );
}

export default AdminMenu;
