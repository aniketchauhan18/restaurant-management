import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function User() {
  const [restaurants , setRestaurants] = useState([]);
  const indexRef = useRef()
  /*
    const indexRef = useRef()

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`https://restaurantapp-7atz.onrender.com/api/v1/restaurants/admin/${userId}`)
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
  */

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restaurantapp-7atz.onrender.com/api/v1/restaurants/")
      const data = await response.json()
      console.log(data.restaurants)
      const restnts = data.restaurants
      const restaurantId = restnts.map((restaurant) => restaurant._id)
      const userRestaurantsIdArray = [restaurantId]
      localStorage.setItem("userRestaurantsIds", userRestaurantsIdArray)
      setRestaurants(data.restaurants)
    }
    fetchData()
  }, [])

  const handleItemClick = (index) => {
    indexRef.current = index
    localStorage.setItem("userCurrentRestaurant", index)
  }

  const mappedRestaurants = restaurants.map((restaurant, index) => {
    return (
      <div key={index} className='flex bg-orange-100 rounded p-3 flex-col w-60 h-60'>
        <div className='flex-1'>
          <div className='w-12 h-12'>
            Photo
          </div>
        </div>
        <p>
          {restaurant.name}
        </p>
        <p>
          {restaurant.city}
        </p>
        <p>
          {restaurant.address}
        </p>
        <div className='flex justify-end'>
          <Link 
            to={'/menu'} 
            className='bg-scarlet-500 rounded py-0.5 px-2 text-white justify-right'
            onClick={() => handleItemClick(index)} 
          >
            Menu
          </Link>
        </div>
      </div> 
    )
  })
  return (
    <div className='m-3'>
      <div className='flex gap-4 flex-wrap'>
        {mappedRestaurants}
      </div>
    </div>
  )
}

export default User;