import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // const [showLogin , setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const linkClasses =
    "text-scarlet-400 py-1 px-1 hover:text-scarlet-500 transition ease-in-out duration-300 font-mukta nav-links";

  useEffect(() => {
    const userExists = localStorage.getItem("jwtToken");
    console.log(userExists);
    if (userExists) {
      setIsLoggedIn(true);
    }
    // } else {
    //   setisLoggedIn(true)
    // }
  }, []);

  // const handleShowLogin = () => {
  //   setShowLogin((prev) => !prev)
  // }

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

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
            <Link className={linkClasses} to={"/createrestaurant"}>
              Add Restaurants
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
