import { useState } from "react";
import { Link } from "react-router-dom"

function Header() {
  const [showLogin , setShowLogin] = useState(false);

  const linkClasses = "bg-scarlet-400 text-white py-1 px-2 rounded-sm hover:bg-scarlet-500 transition ease-in-out duration-300 font-lato"

  const handleShowLogin = () => {
    setShowLogin((prev) => !prev)
  }

  const handleLogout = () => {
    localStorage.clear("jwtToken")
    localStorage.clear("userId")
  }

  return (
      <nav className='flex px-3 items-center sticky w-full h-12 border-b py-4'>
        <h1>
          Restaurant
        </h1>
        <ul className='flex sticky justify-left gap-3 ml-auto mr-5'>
          <Link className={linkClasses}>
            About
          </Link>
          <div className="flex justify-center" onClick={handleShowLogin}>
            {showLogin ? 
              <Link to={'/login'} className={linkClasses}>
                Login
              </Link>
              : 
              <Link to={'/'} onClick={handleLogout} className={linkClasses}>
                Logout
              </Link>
            }
          </div>
        </ul>
      </nav>
  )
}

export default Header;