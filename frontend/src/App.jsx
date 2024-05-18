import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CreateRestaurant from "./components/admin/CreateRestaurant";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import AdminRestaurant from "./components/admin/AdminRestaurant";
import CreateMenu from "./components/admin/CreateMenu";
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
          path="/userRestaurnats"
          element={
            <MainLayout>
              <User />
            </MainLayout>
          }
        />
        S
        <Route
          path="/admin"
          element={
            <MainLayout>
              <Admin />
            </MainLayout>
          }
        />
        <Route
          path="/admin/restaurant"
          element={
            <MainLayout>
              <AdminRestaurant />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/admin/menu"
          element={
            <MainLayout>
              <AdminMenu />
            </MainLayout>
          }
        />
        <Route
          path="/menu"
          element={
            <MainLayout>
              <MenuPage />
            </MainLayout>
          }
        />
        <Route
          path="/createmenu"
          element={
            <MainLayout>
              <CreateMenu />
            </MainLayout>
          }
        />
        <Route
          path="/createrestaurant"
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
