import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deployBaseUrl } from "../api/dataFetcher";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  const showPass = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const obj = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      const response = await fetch(`${deployBaseUrl}/api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      console.log(responseData);
      const data = responseData.data;
      console.log(data);
      if (data.role === "admin") {
        localStorage.setItem("admin-token", data.jwtToken);
        localStorage.setItem("userId", data.userId);
      } else {
        localStorage.setItem("user-token", data.jwtToken);
        localStorage.setItem("userId", data.userId);
      }

      if (!response.ok) {
        alert(data.error);
      } else {
        if (data.role === "admin") {
          navigate(`/admin/${data.userId}`);
        } else {
          navigate(`/user/${data.userId}/restaurants`);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  // const handleSuccess = (credentialResponse) => {
  //   // Handle the successful login here
  //   const decoded = jwtDecode(credentialResponse.credential);
  //   console.log(decoded)
  //   const email = decoded.email;
  //   console.log("User email:", email);
  //   navigate('/')
  // };

  // const handleError = () => {
  //   // Handle login errors here
  //   console.log('Google login failed');
  // };

  return (
    <div className="flex font-inter justify-center items-center h-screen background-image ">
      <div className="flex flex-col sm:flex-row justify-center w-80 sm:w-[600px]  max-w-[600px]">
        <div className="flex flex-col justify-center  sm:w-1/2  bg-white/40 rounded-lg">
          <div className="pt-3 pb-3 w-full flex justify-center items-center bg-scarlet-400 rounded-t-lg mb-4">
            <p className="sm:text-2xl text-white font-medium text-xl sm:font-semibold">
              Welcome Back
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" pb-0 px-5 gap-3 flex flex-col justify-center"
          >
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                required
                placeholder="aniket@gmail.com"
                className="peer w-full bg-white/40 border border-white/40"
              />
              <p className="peer-invalid:visible invisible text-xs text-red-500 ml-1">
                Must be a valid email address
              </p>
            </div>
            <div className="flex flex-col w-full ">
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                placeholder="Password"
                className="w-full md:text-base bg-white/40 border border-white/40 "
              />
              <div className="flex text-xs gap-1 items-center mt-1">
                <p className="ml-1">Show password?</p>
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    value={showPassword}
                    onChange={showPass}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center sm:mt-4">
              <button
                type="submit"
                className="basis-10/12 text-sm bg-scarlet-400/95"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center text-sm md:text-base gap-1 pt-1 pb-3">
              <p className="text-xs md:text-sm">New User ?</p>
              <Link
                to={"/register"}
                className="text-xs md:text-sm flex justify-center text-scarlet-800 hover:text-scarlet-700"
              >
                Register
              </Link>
            </div>
          </form>
          {/*
          <div className="flex justify-center w-full mb-5">
            <GoogleLogin 
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
