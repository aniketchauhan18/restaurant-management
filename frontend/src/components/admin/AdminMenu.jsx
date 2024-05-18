import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MenuPage() {
  const [menuData, setMenuData] = useState([]);
  const [showMenuData, setShowMenuData] = useState(false);

  useEffect(() => {
    const restaurantIds = localStorage.getItem("restaurantsId").split(",");
    const restaurantIndex = localStorage.getItem("currentRestaurant");
    const currentRestaurantId = restaurantIds[restaurantIndex];

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/v1/menus/${currentRestaurantId}`,
      );
      const data = await response.json();
      setMenuData(data.menuData);
      if (response.ok && data.menuData.length !== 0) {
        setShowMenuData(true);
      }
    };
    fetchData();
  }, []);

  const linkClasses =
    "bg-scarlet-400 text-white py-1 px-2 rounded-sm hover:bg-scarlet-500 transition ease-in-out duration-300 font-lato";

  return (
    <div className="flex flex-col h-dvh bg-cover bg-center">
      <div className="w-full mt-4 flex">
        <div className="flex justify-center items-center flex-wrap p-3 gap-3">
          <div>
            {showMenuData
              ? menuData.map((menu, index) => {
                  return (
                    <div
                      key={index}
                      className="h-[200px] w-[200px] bg-gray-300 p-2 rounded border shadow"
                    >
                      {menu.name}
                    </div>
                  );
                })
              : "No menu Added"}
          </div>
          <div>
            <Link className={linkClasses} to={"/createmenu"}>
              Add Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
