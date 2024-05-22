import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import UserMenu from "./components/user/UserMenu";
import CreateRestaurant from "./components/admin/CreateRestaurant";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import AdminRestaurant from "./components/admin/AdminRestaurant";
import AdminMenu from "./components/admin/AdminMenu";
import MainLayout from "./components/common/MainLayout";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route
          path="/user/:userId/restaurants"
          element={
            <MainLayout>
              <User />
            </MainLayout>
          }
        />
        S
        <Route
          path="/admin/:id"
          element={
            <MainLayout>
              <Admin />
            </MainLayout>
          }
        />
        <Route
          path="/admin/restaurants/:id"
          element={
            <MainLayout>
              <AdminRestaurant />
            </MainLayout>
          }
        />
        <Route
          path="/admin/:adminId/:restaurantId/menu"
          element={
            <MainLayout>
              <AdminMenu />
            </MainLayout>
          }
        />
        <Route // /user/${id}/${restaurant._id}/menu
          path="/user/:id/:restaurantId/menu"
          element={
            <MainLayout>
              <UserMenu />
            </MainLayout>
          }
        />
        {/* <Route
          path="/admin/createmenu/:id"
          element={
            <MainLayout>
              <CreateMenu />
            </MainLayout>
          }
        /> */}
        <Route
          path="/admin/createrestaurant/:id"
          element={
            <MainLayout>
              <CreateRestaurant />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
