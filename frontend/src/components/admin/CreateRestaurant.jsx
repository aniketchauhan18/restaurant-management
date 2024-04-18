import { useState } from "react";
import { useNavigate } from "react-router-dom"

function CreateRestaurant() {
  
  const [form , setForm] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    address: "",
    description: "",
    number: "",
    email:"",
    websiteURL: ""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(form)
    try {
      // const { data } = axios.post("http://localhost:3000/api/v1/restaurants/register", formData)
      // console.log(data.message)

      const jwtToken = localStorage.getItem('jwtToken')
      
      const response = await fetch('http://localhost:3000/api/v1/restaurants/register', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(form)
      })
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        console.log('yes')
        navigate('/menu')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col">
        <p className="flex justify-center text-6xl font-lato font-bold">
          Create Restaurant
        </p>
        <form 
          onSubmit={handleSubmit}
          className="flex gap-10 bg-scarlet-200 p-10 rounded-md mt-10"
        >
          <div className="flex flex-col gap-3">
            <input
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              placeholder="Country"
              name="country"
              onChange={handleChange}
            />
            <input
              placeholder="State"
              onChange={handleChange}
              name="state"
            />
            <input
              placeholder="City"
              onChange={handleChange}
              name="city"
            />
            <input
              placeholder="Address"
              onChange={handleChange}
              name="address"
            />
          </div>
          <div className="flex flex-col gap-3">
            <textarea
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
            <input
              placeholder="Number"
              type="text"
              name="number"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}

            />
            <input
              placeholder="websiteUrl"
              type="text"
              name="websiteURL"
              onChange={handleChange}
            />
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRestaurant;