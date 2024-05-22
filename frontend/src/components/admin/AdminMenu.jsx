import { fetchMenuData } from "../../api/dataFetcher";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import CreateMenuModal from "./CreateMenuModal";
import AdminMenuCard from "./AdminMenuCard";

function MenuPage() {
  const [showMenuModal, setShowMenuModal] = useState(false)
  const { adminId, restaurantId } = useParams();
  console.log(restaurantId)

  const navigate = useNavigate();

  const { data: menuData , error, isLoading } = useQuery({
    queryKey: ['menuData', restaurantId],
    queryFn: () => fetchMenuData(restaurantId),
    staleTime: Infinity
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
          <AdminMenuCard name={menu.name} price={menu.price} description={menu.description} />
        </div>
      ));
    }

    return <div>No menu Added</div>;
  })()

  const closeModal = () => {
    setShowMenuModal(false)
    navigate(`/admin/${adminId}/${restaurantId}/menu`)
  }

  console.log(menuData)
  const linkClasses =
    "bg-scarlet-400 text-white py-1 px-2 rounded-sm hover:bg-scarlet-500 transition ease-in-out duration-300 font-inter";

  console.log(adminId,restaurantId)

  return (
    <div className="flex font-inter flex-col h-dvh bg-cover bg-center">
      <div className="w-full mt-4 flex justify-center sm:justify-normal">
        <div className="flex flex-col justify-center p-3 gap-3">
          <div className="w-full flex flex-col flex-wrap justify-evenly sm:flex-row gap-2">
            {renderContent}
          </div>
          <div className="flex">
            <button onClick={() => setShowMenuModal(true)}  className={linkClasses} >
              Add Menu
            </button>
          </div>
        </div>
      </div>
      <div>
        {showMenuModal && <CreateMenuModal closeModal={closeModal}/>}
      </div>
    </div>
  );
}

export default MenuPage;
