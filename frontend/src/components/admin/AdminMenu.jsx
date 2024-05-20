import CreateMenuModal from "./CreateMenuModal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MenuPage() {
  const [menuData, setMenuData] = useState([]);
  const [showMenuData, setShowMenuData] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false)
  const { restaurantId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/menus/${restaurantId}`,
      );
      const menuData = await response.json();
      console.log(menuData.data)
      setMenuData(menuData.data);
      if (response.ok && menuData.data.length !== 0) {
        setShowMenuData(true);
      }
    };
    fetchData();
  }, [restaurantId]);


  const linkClasses =
    "bg-scarlet-400 text-white py-1 px-2 rounded-sm hover:bg-scarlet-500 transition ease-in-out duration-300 font-inter";

  const closeModal = () => {
    setShowMenuModal(false)
  }

  return (
    <div className="flex font-inter flex-col h-dvh bg-cover bg-center">
      <div className="w-full mt-4 flex">
        <div className="flex justify-center items-center flex-wrap p-3 gap-3">
          <div>
            {showMenuData
              ? menuData.map((menu) => {
                  return (
                    <div
                      key={menu._id}
                      className="h-[200px] w-[200px] bg-gray-300 p-2 rounded border shadow"
                    >
                      {menu.name}
                    </div>
                  );
                })
              : "No menu Added"}
          </div>
          <div>
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
