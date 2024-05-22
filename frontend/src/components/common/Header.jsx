import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  // const [showLogin , setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminRestaurant, setAdminRestaurant] = useState(false);

  const linkClasses =
    "text-scarlet-400 py-1 px-1 hover:text-scarlet-500 transition ease-in-out duration-300 font-inter nav-links";

  let userRoleRef = useRef();
  useEffect(() => {
    setAdminRestaurant(false);
    setIsLoggedIn(false);
    console.log(localStorage.getItem("admin-token"));
    if (localStorage.getItem("admin-token")) {
      userRoleRef.current = "admin";
      setAdminRestaurant(true);
      setIsLoggedIn(true);
    }
    if (localStorage.getItem("user-token")) {
      userRoleRef.current = "user";
      setAdminRestaurant(false);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };
  const userId = localStorage.getItem("userId");
  const restaurantPath = isLoggedIn
    ? adminRestaurant
      ? `/admin/restaurants/${userId}`
      : `/user/${userId}/restaurants`
    : "/login";
  console.log(restaurantPath);

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
            <Link className={linkClasses} to={"/login"}>
              LogIn
            </Link>
            <Link className={linkClasses} to={"/register"}>
              SignUp
            </Link>
            {/* <div className="flex justify-center">
            {isLoggedIn &&
              <Link to={'/'} onClick={handleLogout} className={linkClasses}>
                Logout
              </Link>
            }
          </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
