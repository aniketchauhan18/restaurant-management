import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, adminRestaurant }) {
  const [showLogout, setShowLogout] = useState(isLoggedIn);
  const navigate = useNavigate();

  const linkClasses =
    "text-scarlet-400 py-1 px-1 hover:text-scarlet-500 transition ease-in-out duration-300 font-inter nav-links text-sm sm:text-base";

  useEffect(() => {
    setShowLogout(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("admin-token");
    localStorage.removeItem("user-token");
    localStorage.removeItem("userId");
    setShowLogout(false);
    navigate("/");
  };

  const userId = localStorage.getItem("userId");
  const restaurantPath = showLogout
    ? adminRestaurant
      ? `/admin/restaurants/${userId}`
      : `/user/${userId}/restaurants`
    : "/login";

  return (
    <header className="flex justify-center">
      <nav className="flex rounded-full px-3 items-center w-full h-12 py-4 bg-white/40  m-5 justify-between border">
        <Link
          to={"/"}
          className="font-inter font-normal text-xl ml-2 text-stone-700 restaurant-heading flex justify-center items-center"
        >
          Restaurant
        </Link>
        <div className="flex justify-center w-full items-center">
          <div className="flex gap-5 ml-auto mr-5 nav-container">
            <Link className={linkClasses} to={restaurantPath}>
              Restaurants
            </Link>
            {showLogout || (
              <Link className={linkClasses} to={"/register"}>
                Signup
              </Link>
            )}
            <div className="flex justify-center">
              {showLogout ? (
                <Link to={"/"} onClick={handleLogout} className={linkClasses}>
                  Logout
                </Link>
              ) : (
                <Link className={linkClasses} to={"/login"}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
