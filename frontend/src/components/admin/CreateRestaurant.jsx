import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

function CreateRestaurant() {
  const [form, setForm] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    address: "",
    description: "",
    number: "",
    email: "",
    websiteURL: "",
  });

  const navigate = useNavigate();

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
      // const { data } = axios.post("http://localhost:3000/api/v1/restaurants/register", formData)
      // console.log(data.message)

      const jwtToken = localStorage.getItem("jwtToken");

      const response = await fetch(
        "http://localhost:3000/api/v1/restaurants/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(form),
        },
      );
      const responseData = await response.json();
      console.log(responseData.data);
      if (response.ok) {
        console.log("yes");
        navigate("/admin/restaurant");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const inputClasses = "rounded w-full";

  return (
    <div className=" flex justify-center w-full h-dvh p-3 mb-5">
      <div className="flex flex-col w-full">
        <p className="flex justify-center rest-header text-4xl w-full text-scarlet-400 font-lato font-bold mb-5">
          Create Restaurant
        </p>
        <div className="flex justify-center h-screen items-center">
          <Modal>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10 w-full rest-frm bg-scarlet-100 bg-opacity-65 rounded border border-scarlet-200 items-start p-10 "
            >
              <div className="flex flex-col md:flex-row w-full justify-evenly gap-3">
                <div className="flex flex-col gap-3 basis-1/2">
                  <input
                    placeholder="Restaurant Name"
                    name="name"
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                  <input
                    placeholder="Country"
                    name="country"
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                  <input
                    placeholder="State"
                    onChange={handleChange}
                    name="state"
                    className={inputClasses}
                    required
                  />
                  <input
                    placeholder="City"
                    onChange={handleChange}
                    name="city"
                    className={inputClasses}
                    required
                  />
                  <input
                    placeholder="Address"
                    onChange={handleChange}
                    name="address"
                    className={inputClasses}
                    required
                  />
                  <textarea
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col basis-1/2 gap-3">
                  <input
                    placeholder="Number"
                    type="text"
                    name="number"
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                  <input
                    placeholder="Website URL (optional)"
                    type="text"
                    name="websiteURL"
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="px-6 basis-1/2 text-sm md:text-base py-1"
                >
                  Create
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CreateRestaurant;
