import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function User() {
  const [restaurantData , setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/restaurants/")
      const data = await response.json()
      setRestaurantData(data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <Link>Restaurants</Link>
    </div>
  )
}

export default User;