import { Link } from "react-router-dom"

function Admin() {
  
  return (
    <div className="flex justify-center items-center h-dvh">
      <Link 
        to={'/createrestaurant'}
      
      >
        Create Restautant
      </Link>
    </div>
  )
}

export default Admin;