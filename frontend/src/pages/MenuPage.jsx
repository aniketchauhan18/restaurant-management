import { useState, useEffect } from "react";

function MenuPage() {
  const [menuData, setMenuData] = useState([]);
  const [showMenuData, setShowMenuData] = useState(false)

  useEffect(() => {
    const restaurantIds = localStorage.getItem("userRestaurantsIds").split(",")
    const restaurantIndex = localStorage.getItem("userCurrentRestaurant")
    const currentRestaurantId = restaurantIds[restaurantIndex]
    console.log(currentRestaurantId)

    const fetchData = async() => {
      const response = await fetch(`https://restaurantapp-7atz.onrender.com/api/v1/menus/${currentRestaurantId}`)
      const data = await response.json()
      console.log(data)
      setMenuData(data.menuData)
      if (response.ok && (data.menuData.length !== 0)) {
        setShowMenuData(true)
      }
    }
    fetchData()
  }, [])


  return (
    <div className="flex flex-col h-dvh bg-cover bg-center">    
      <div className="w-full mt-4 flex">
        <div className="flex justify-center items-center flex-wrap p-3 gap-3">
          <div>
            {showMenuData ? 
               menuData.map((menu, index) => {
                return (
                  <div
                    key={index}
                    className="h-[200px] w-[200px] bg-gray-300 p-2 rounded border shadow"
                  >
                    {menu.name}
                  </div>
                )
              })
            : 
              "No menu Added"
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage;