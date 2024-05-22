import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const showPass = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      role: formData.get("role"),
      email: formData.get("firstName"),
      password: formData.get("password"),
    };
    console.log(obj);
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        },
      );
      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const inputClasses = "border-b p-2 text-base";
  return (
    <div className="flex font-inter w-full h-screen justify-center items-center">
      <div className="flex flex-col sm:flex-row w-3/4 justify-center">
        <div className="flex h-16 sm:h-auto sm:w-[400px] items-center justify-center bg-scarlet-400 text-white rounded-t-lg sm:rounded-none  sm:rounded-l-lg">
          <p className="sm:text-4xl font-medium text-xl sm:font-semibold">
            Signup
          </p>
        </div>
        <div className="pt-2 sm:pt-10 border  border-stone-300 sm:w-[400px] rounded-b-lg sm:rounded-none sm:rounded-r-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 p-4 mb-3"
          >
            <div className="flex flex-col gap-2 w-full">
              <input
                className=""
                type="text"
                name="firstName"
                placeholder="Firstname"
                required
              />
              <input name="lastName" placeholder="Lastname" type="text" />
              <select className={inputClasses} name="role" required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <div className="flex flex-col">
                <input
                  type="email"
                  required
                  placeholder="aniket@gmail.com"
                  className="peer"
                  name="email"
                />
                <p className="invisible text-red-500 peer-invalid:visible peer-focus:invisible ml-1 text-xs">
                  Must be a valid email address
                </p>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex text-xs gap-1 items-center">
              <p className="ml-1">Show password?</p>
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"
                  value={showPassword}
                  onChange={showPass}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="text-sm sm:text-base w-32">
                Signup
              </button>
            </div>
            <div className="flex text-xs sm:text-sm justify-center items-center">
              <p className="mr-1">Already registered?</p>
              <Link
                className="text-scarlet-400 hover:text-scarlet-500 hover:border-scarlet-400 text-xs sm:text-sm"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
