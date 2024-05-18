import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    role: "user",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const inputClasses = "border-b p-2 text-base";
  const navigate = useNavigate();

  // const onSubmit = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/v1/users/login', {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formData)
  //     })
  //     const data = await response.json()
  //     console.log(data.message);
  //     // const { data } = await axios.post('http://localhost:3000/api/v1/users/register', formData )

  //     // console.log(data.message)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  const showPass = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
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

  return (
    // <div className="flex w-full h-dvh flex-col">
    //   <div className="flex justify-center items-center h-dvh">
    //     <div className="flex flex-col justify-center items-center p-5 rounded bg-scarlet-50">
    //       <h1 className="mb-3 text-4xl font-Roboto font-bold">
    //         Signup
    //       </h1>
    //       <form
    //         className="flex flex-col justify-center items-center w-full text-zinc-700"
    //         onSubmit={handleSubmit}
    //       >
    //         <div className="flex flex-col gap-5 p-3 w-96 ">
    //           <input
    //             type="text"
    //             placeholder="Firstname"
    //             name="firstName"
    //             required
    //             className={inputClasses}
    //             onChange={handleChange}
    //           />
    //           <input
    //             type="text"
    //             placeholder="Lastname"
    //             name="lastName"
    //             className={inputClasses}
    //             onChange={handleChange}
    //           />
    //           <select
    //             className={inputClasses}
    //             name="role"
    //             onChange={handleChange}
    //           >
    //             <option
    //             defaultValue="Select"
    //             >
    //               Select role
    //             </option>
    //             <option
    //               value="user"
    //             >
    //               User
    //             </option>
    //             <option
    //               value="admin"
    //             >
    //               Admin
    //             </option>
    //           </select>
    //           <div className="flex flex-col">
    //             <input
    //               type="email"
    //               required
    //               placeholder="Email"
    //               className="peer"
    //               name="email"
    //               onChange={handleChange}
    //             />
    //             <p className="invisible text-red-500 text-sm peer-invalid:visible peer-focus:invisible ml-1">
    //               Must be a valid email address
    //             </p>
    //           </div>
    //           <input
    //             type={
    //               showPassword ? "text" : "password"
    //             }
    //             placeholder="Password"
    //             name="password"
    //             onChange={handleChange}
    //             required
    //             className={inputClasses}
    //           />
    //           <div className="flex text-sm gap-2 items-center">
    //             <p>Show password?</p>
    //             <div className="flex justify-center items-center">
    //               <input
    //                 type="checkbox"
    //                 value={showPassword}
    //                 onChange={showPass}
    //               />
    //             </div>
    //           </div>
    //           <button type="submit" className="text-base">
    //             Signup
    //           </button>
    //         </div>
    //       </form>
    //       <div className="flex gap-3 text-base">
    //         <p>Already registered?</p>
    //         <Link
    //           className="text-scarlet-400 hover:text-scarlet-500 hover:border-scarlet-400 text-base"
    //           to={'/login'}
    //         >
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex font-poppins w-full h-screen justify-center items-center">
      <div className="flex flex-col sm:flex-row w-3/4 justify-center">
        <div className="flex h-16 sm:h-auto sm:w-[400px] items-center justify-center bg-scarlet-400 text-white rounded-t-lg sm:rounded-none  sm:rounded-l-lg">
          <p className="sm:text-4xl font-medium text-xl sm:font-semibold">
            Signup
          </p>
        </div>
        <div className="pt-2 sm:pt-10 bg-scarlet-50 sm:w-[400px] rounded-b-lg sm:rounded-none sm:rounded-r-lg">
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
                onChange={handleChange}
                required
              />
              <input
                className=""
                onChange={handleChange}
                name="lastName"
                placeholder="Lastname"
                type="text"
              />
              <select
                className={inputClasses}
                name="role"
                required
                onChange={handleChange}
              >
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
                  onChange={handleChange}
                />
                <p className="invisible text-red-500 peer-invalid:visible peer-focus:invisible ml-1 text-xs">
                  Must be a valid email address
                </p>
              </div>
              <input
                className=""
                onChange={handleChange}
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
            <div className="flex text-xs justify-center items-center">
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
