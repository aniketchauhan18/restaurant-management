import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function SignupPage() {
  const [form , setForm] = useState({
    firstName: "",
    lastName: "",
    role: "user",
    email: "",
    password: "",
  })

  
  const [showPassword, setShowPassword] = useState(false);
  const inputClasses = "border-b p-2 text-xl";
  const navigate = useNavigate()

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
    setShowPassword((prev) => !prev)
  }

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      const data = await response.json();
      alert(data.message)
      

      if (response.ok) {
        navigate('/login')
      }

    } catch(e) {
      console.log(e)
    }
  }


  return (
    <div className="flex w-full h-dvh justify-center items-center">
      <div className="flex flex-col justify-center items-center p-5 rounded bg-scarlet-50">
        <h1 className="mb-3 text-4xl font-Roboto font-bold">
          Signup
        </h1>
        <form 
          className="flex flex-col justify-center items-center w-full text-zinc-700"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 p-3 w-96 ">
            <input 
              type="text"
              placeholder="Firstname"
              name="firstName"
              required
              className={inputClasses}
              onChange={handleChange}
            />
            <input 
              type="text"
              placeholder="Lastname"
              name="lastName"
              className={inputClasses}
              onChange={handleChange}
            />
            <select 
              className={inputClasses}
              name="role"
              onChange={handleChange}
            >
              <option
              defaultValue="Select"
              >
                Select role
              </option>
              <option 
                value="user"
              >
                User
              </option>
              <option 
                value="admin"
              >
                Admin
              </option>
            </select>
            <div className="flex flex-col"> 
              <input 
                type="email"
                required
                placeholder="Email"
                className="peer"
                name="email"
                onChange={handleChange}
              />
              <p className="invisible text-red-500 peer-invalid:visible peer-focus:invisible ml-1">
                Must be a valid email address
              </p>
            </div>
            <input 
              type={
                showPassword ? "text" : "password"
              }
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <div className="flex text-sm gap-2 items-center">
              <p>Show password?</p>
              <div className="flex justify-center items-center">
                <input 
                  type="checkbox"
                  value={showPassword}
                  onChange={showPass}
                />
              </div>
            </div>
            <button type="submit">
              Signup
            </button>
          </div>
        </form>
        <div className="flex gap-3">
          <p>Already registered?</p>
          <Link 
            className="text-scarlet-400 hover:text-scarlet-500 hover:border-scarlet-400"
            to={'/login'}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;