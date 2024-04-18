import { useState } from "react";

function CreateMenu() {
  const [form , setForm] = useState({

  })

  // const onSubmit = async(formData) => {
  //   try {
  //     const { data } = axios.post("http://localhost:3000/api/v1/menus/create", formData)
  //     console.log(data)
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
  const handleChange = (e) => {
    setForm(
      ...form,
      [e.target.name] = e.target.value
    )
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const jwtToken = localStorage.getItem('jwtToken');
      const response = await fetch('http://localhost:3000/api/v1/menus/create', {
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

  return (
    <div className="bg-scarlet-50 bg-opacity-50 p-4 rounded w-full">
      <p className="flex justify-center mt-3 text-6xl font-lato font-bold mb-10">
        Create Menu
      </p>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
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
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateMenu;