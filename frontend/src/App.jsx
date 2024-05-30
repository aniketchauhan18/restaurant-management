import { Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import UserMenu from "./components/user/UserMenu";
import CreateRestaurant from "./components/admin/CreateRestaurant";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import AdminRestaurants from "./components/admin/AdminRestaurants";
import AdminMenu from "./components/admin/AdminMenu";
import MainLayout from "./components/common/MainLayout";
import AdminRestaurant from "./components/admin/AdminRestaurant";
import ImgUpload from "./pages/ImgUpload";
function App() {
  const clientId = '680449140889-81vr6en7jh7esto3g5r7bloevevif989.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
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
              <AdminRestaurants />
            </MainLayout>
          }
        />
        <Route
          path="/admin/:adminId/:restaurantId/menu"
          element={
            <MainLayout>
              <AdminRestaurant />
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
          path="/222"
          element={
            <MainLayout>
              <AdminRestaurant />
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
        <Route 
          path="/imgup"
          element={
            <MainLayout>
              <ImgUpload />
            </MainLayout>
          }
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
