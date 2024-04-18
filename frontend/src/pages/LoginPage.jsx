import { useState } from 'react'
import Header from '../components/common/Header';
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";


function LoginPage() {
  const [form , setForm ] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  // const onSubmit = async (formData) => {
  //   try {
  //     // const response = await fetch('http://localhost:3000/api/v1/users/login', {
  //     //   method: "POST", 
  //     //   headers: {
  //     //     "Content-Type": "application/json"
  //     //   },
  //     //   body: JSON.stringify(formData)
  //     // })
  //     // const data = await response.json()
  //     // console.log(data);
  //     const { data } = await axios.post('http://localhost:3000/api/v1/users/login', formData )
  //     localStorage.setItem("res-token", data.jwtToken)

  //     console.log(data.message)
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
    try{
      const response = await fetch('http://localhost:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()
      localStorage.setItem('jwtToken', data.jwtToken);
      localStorage.setItem('userId', data.userId)
      console.log(data)

      if(!response.ok) {
        alert(data.error)
      } else {
        if (data.role === "admin"){
          navigate('/admin')
        } else {
          navigate('/user')
        }
      }
    } catch(e) {
      console.log(e)
    }
  }
  
  return (
    <div className='flex flex-col w-full h-dvh'>
      <Header />
      <div className='flex justify-center items-center h-dvh'>
        <div className='flex flex-col justify-center items-center p-5 rounded bg-scarlet-50'>
          <h1 className="mb-3 text-4xl font-Roboto font-bold">
            Login
          </h1>
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center w-full "
          >
            <div className='flex flex-col gap-5 p-3 w-96'>
              <div className="flex flex-col"> 
                <input 
                  type="email"
                  required
                  placeholder="Email"
                  name='email'
                  className="peer"
                  onChange={handleChange}
                />
                <p className="invisible text-red-500 text-sm ml-1 peer-invalid:visible peer-focus:invisible">
                  Must be a valid email address
                </p>
              </div>
              <input
                type={
                  showPassword ? "text" : "password"
                }
                placeholder='Password'
                name='password'
                onChange={handleChange}
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
              <button type='submit'>Login</button>
            </div>
          </form>
          <div className='flex gap-2'>
            <p>New user ?</p>
            <Link className='text-scarlet-400 hover:text-scarlet-500 transition duration-75 ease-in-out hover:border-scarlet-500 '>Register</Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage