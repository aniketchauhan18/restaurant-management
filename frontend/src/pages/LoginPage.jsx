import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      const data = responseData.data;
      console.log(data)
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
    <div className="flex font-inter justify-center items-center h-screen">
      <div className="flex  flex-col sm:flex-row justify-center w-80 sm:w-[600px]  max-w-[600px]">
        <div className="flex h-16 sm:h-96 bg-scarlet-400 rounded-t-lg  sm:rounded-none sm:rounded-l-lg text-white justify-center p-3  sm:w-full">
          <p className="flex justify-center font-inter items-center sm:text-3xl text-xl sm:font-semibold">
            Welcome Back
          </p>
        </div>
        <div className="flex flex-col justify-center border border-stone-300 sm:pt-5 rounded-b-lg sm:rounded-none sm:rounded-r-lg sm:w-[600px] sm:px-1">
          <form
            onSubmit={handleSubmit}
            className="pt-3 pb-0 px-3 gap-3 flex flex-col justify-center"
          >
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                required
                placeholder="aniket@gmail.com"
                className="peer w-full"
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
                className="w-full md:text-base"
              />
              <span className="ml-1 text-zinc-600 text-xs sm:text-sm flex gap-2">
                Show Password{" "}
                <input
                  type="checkbox"
                  className="flex justify-center mt-0.5 md:mt-1"
                  onChange={showPass}
                />
              </span>
            </div>
            <div className="flex w-full justify-center sm:mt-4">
              <button type="submit" className="basis-10/12 text-sm">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center text-sm md:text-base gap-1 pt-1 pb-3">
            <p className="text-xs md:text-sm">New User ?</p>
            <Link
              to={"/register"}
              className="text-xs md:text-sm flex justify-center text-scarlet-600"
            >
              Register
                </Link>
              </div>
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
