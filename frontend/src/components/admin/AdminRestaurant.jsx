import { useEffect, useState } from 'react'

function AdminRestaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/api/v1/restaurants/admin/${userId}`)
      const data  = await response.json();
      setRestaurants(data.restaurants)
    }
    fetchData()
  }, [])


  const mappedRestaurants = restaurants.map((restaurant, index) => {
    return (
      <div key={index} className='flex w-[200px] h-[200px] bg-orange-300 rounded p-3'>
        {restaurant.name}
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