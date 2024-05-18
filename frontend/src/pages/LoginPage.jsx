import { useState } from 'react'
import { Link, useNavigate  } from "react-router-dom";

function LoginPage() {
  const [form , setForm ] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
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

      const responseData = await response.json()
      const data = responseData.data
      localStorage.setItem('jwtToken', data.jwtToken);
      localStorage.setItem('userId', data.userId)

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
    // <div className='flex flex-col w-full h-dvh'>
    //   <div className='flex justify-center items-center h-dvh'>
    //     <div className='flex flex-col justify-center items-center p-5 rounded bg-scarlet-50'>
    //       <h1 className="mb-3 text-4xl font-Roboto font-bold">
    //         Login
    //       </h1>
    //       <form 
    //         onSubmit={handleSubmit}
    //         className="flex flex-col justify-center items-center w-full "
    //       >
    //         <div className='flex flex-col gap-5 p-3 w-96'>
    //           <div className="flex flex-col"> 
    //             <input 
    //               type="email"
    //               required
    //               placeholder="Email"
    //               name='email'
    //               className="peer"
    //               onChange={handleChange}
    //             />
    //             <p className="invisible text-red-500 text-sm ml-1 peer-invalid:visible peer-focus:invisible">
    //               Must be a valid email address
    //             </p>
    //           </div>
    //           <input
    //             type={
    //               showPassword ? "text" : "password"
    //             }
    //             placeholder='Password'
    //             name='password'
    //             onChange={handleChange}
    //           />
    //           <div className="flex text-sm gap-2 items-center">
    //           <p>Show password?</p>
    //           <div className="flex justify-center items-center">
    //             <input 
    //               type="checkbox"
    //               value={showPassword}
    //               onChange={showPass}
    //             />
    //           </div>
    //         </div>
    //           <button type='submit'>Login</button>
    //         </div>
    //       </form>
    //       <div className='flex gap-2'>
    //         <p>New user ?</p>
    //         <Link 
    //           className='text-scarlet-400 hover:text-scarlet-500 transition duration-75 ease-in-out hover:border-scarlet-500'
    //           to={'/register'}
    //         >
    //           Register
    //         </Link> 
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='flex justify-center items-center h-screen'>
      <div className='flex  flex-col sm:flex-row justify-center w-80 sm:w-[600px]  max-w-[600px]'>
        <div className='flex h-16 sm:h-96 bg-scarlet-400 rounded-t-lg  sm:rounded-none sm:rounded-l-lg text-white justify-center p-3  sm:w-full'>
          <p className='flex justify-center font-poppins items-center sm:text-3xl text-xl sm:font-semibold'>Welcome Back</p>
        </div>
        <div className='flex flex-col justify-center bg-scarlet-50 sm:pt-5 rounded-b-lg sm:rounded-none sm:rounded-r-lg sm:w-[600px] sm:px-1'>
        <form onSubmit={handleSubmit} className='pt-3 pb-0 px-3 gap-3 flex flex-col justify-center'>
          <div className='flex flex-col'>
            <input 
              type='email'
              name='email'
              required
              placeholder='aniket@gmail.com'
              onChange={handleChange}
              className='peer w-full'
            />
            <p className='peer-invalid:visible invisible text-xs text-red-500 ml-1'>
              Must be a valid email address
            </p>
          </div>
          <div className='flex flex-col w-full '>
            <input 
              type={
                showPassword ?  'text' : 'password' 
              }
              required
              name='password'
              placeholder='Password'
              className='w-full md:text-base'
              onChange={handleChange}
            />
            <span className='ml-1 text-zinc-600 text-xs sm:text-sm flex gap-2'>
              Show Password <input type='checkbox' className='flex justify-center mt-0.5 md:mt-1' onChange={showPass}/>
            </span>
          </div>
          <div className='flex w-full justify-center sm:mt-4'>
            <button type='submit' className='basis-10/12 text-sm'>
              Login
            </button>
          </div>
        </form>
        <div className='flex justify-center text-sm md:text-base gap-1 pt-1 pb-3'>
          <p className='text-xs md:text-sm'>New User ?</p>
          <Link
            className='text-xs md:text-sm flex justify-center text-scarlet-600'
          >
            Register
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage