import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, adminRestaurant }) {
  const [showLogout , setShowLogout] = useState(isLoggedIn);
  const navigate = useNavigate();

  const linkClasses =
    "text-scarlet-400 py-1 px-1 hover:text-scarlet-500 transition ease-in-out duration-300 font-inter nav-links";
  
  useEffect(() => {
    setShowLogout(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("admin-token");
    localStorage.removeItem("user-token");
    localStorage.removeItem("userId");
    setShowLogout(false);
    navigate('/')
  };
  
  const userId = localStorage.getItem("userId");
  const restaurantPath = isLoggedIn
    ? adminRestaurant
      ? `/admin/restaurants/${userId}`
      : `/user/${userId}/restaurants`
    : "/login";

  return (
    <div className="flex justify-center mb-10">
      <nav className="flex px-3 items-center w-full h-12 border-b py-4  border border-zinc-200 rounded-full m-5 justify-between">
        <Link
          to={"/"}
          className="font-poppins text-2xl restaurant-heading flex justify-center items-center"
        >
          Restaurant
        </Link>
        <div className="flex justify-center w-full items-center">
          <div className="flex gap-5 ml-auto mr-5 nav-container">
            <Link className={linkClasses} to={restaurantPath}>
              Restaurants
            </Link>
            {showLogout || <Link className={linkClasses} to={"/register"}>
              SignUp
            </Link>}
            <div className="flex justify-center">
            {showLogout ?
              <Link to={'/'} onClick={handleLogout} className={linkClasses}>
                Logout
              </Link> : <Link className={linkClasses} to={"/login"}>
              LogIn
            </Link>
            }
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
