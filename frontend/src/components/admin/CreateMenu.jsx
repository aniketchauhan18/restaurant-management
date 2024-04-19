import { useState } from "react";

function CreateMenu() {
  const [form , setForm] = useState({
    name: "",
    price: "",
    description: ""
  })
  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log(form)
      const jwtToken = localStorage.getItem('jwtToken');
      const restaurantIndex = localStorage.getItem('currentRestaurant');
      const restaurants = localStorage.getItem('restaurantsId')
      const currentRestautantId = restaurants[restaurantIndex];
      const response = await fetch(`http://localhost:3000/api/v1/menus/create/:${currentRestautantId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Autorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify(form)
      })
      
    } catch (e) {
      console.log(e)
    }
  }
  
  const handleChange = (e) => {
    setForm(
      ...form,
      [e.target.name] = e.target.value
    )
  }

  return (
    <div className="p-4 rounded flex justify-center flex-col items-center h-dvh">
      <div className="bg-scarlet-100 p-4 rounded-md">
        <p className="flex justify-center mt-3 text-6xl font-lato font-bold mb-10">
          Add Menu
        </p>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 "
        >
          <input 
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={handleChange}
          />
          <input 
            type="text"
            required
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
          <textarea
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
          <button className="font-semi-bold">
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateMenu;