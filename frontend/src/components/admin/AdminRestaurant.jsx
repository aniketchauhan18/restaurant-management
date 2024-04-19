import { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"

function AdminRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const indexRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/api/v1/restaurants/admin/${userId}`)
      const data  = await response.json();
      console.log(data)
      const restnts = data.restaurants;
      const restaurantsId = restnts.map((restaurant) => restaurant._id)
      const restaurantIdArray = [restaurantsId]
      // console.log(restaurantIdArray)
      setRestaurants(data.restaurants)
      localStorage.setItem("restaurantsId", restaurantIdArray)
    }
    fetchData()
  }, [])

  const handleItemClick = (index) => {
    indexRef.current = index
    localStorage.setItem("currentRestaurant", index)
  }

  const mappedRestaurants = restaurants.map((restaurant, index) => {
    return (
      <div key={index} className='flex w-[200px] h-[200px] bg-orange-300 rounded p-3 flex-col'>
        <div >
          {restaurant.name}
        </div>
        <div>
          <Link 
            to={'/menu'} 
            className='bg-scarlet-600 rounded py-1 px-2 text-white'
            onClick={() => handleItemClick(index)} 
          >
            Menu
          </Link>
        </div>
      </div> 
    )
  })

  return (
    <div className='flex justify-center flex-wrap p-3 gap-3 flex-col'>
      <p className='flex justify-center items-center font-lato text-4xl font-semi-bold'>
        Your Restaurants
      </p>
      <div className='flex justify-center flex-wrap p-3 gap-3'>
        {mappedRestaurants}
      </div>
    </div>
  )
}

export default AdminRestaurant;