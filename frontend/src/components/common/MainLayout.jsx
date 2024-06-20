import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
function MainLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminRestaurant, setAdminRestaurant] = useState(false);
  const userRoleRef = useRef();

  useEffect(() => {
    setAdminRestaurant(false);
    setIsLoggedIn(false);
    console.log(localStorage.getItem("admin-token"));
    if (localStorage.getItem("admin-token")) {
      userRoleRef.current = "admin";
      setAdminRestaurant(true);
      setIsLoggedIn(true);
    } else if (localStorage.getItem("user-token")) {
      userRoleRef.current = "user";
      setAdminRestaurant(false);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} adminRestaurant={adminRestaurant} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
