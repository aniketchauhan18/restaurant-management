import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

function CreateRestaurantModal({ closeModal }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name"),
      country: formData.get("country"),
      state: formData.get("state"),
      city: formData.get("city"),
      address: formData.get("address"),
      description: formData.get("description"),
      number: formData.get("number"),
      email: formData.get("email"),
      websiteURL: formData.get("websiteURL"),
    };
    try {
      const jwtToken = localStorage.getItem("admin-token");

      const response = await fetch(
        "http://localhost:3000/api/v1/restaurants/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(obj),
        },
      );
      await response.json();
      if (response.ok) {
        console.log("yes");
        navigate(`/admin/restaurants/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 p-4 z-50 font-inter flex justify-center flex-col items-center">
      <div className="flex flex-col bg-white p-5 rounded-lg">
        <div className="flex justify-between ml-2 border-b border-stone-400">
          <p className="flex justify-center text-base sm:text-xl font-medium mb-2 text-stone-600">
            Create Restaurant
          </p>
          <IoMdClose
            className="hover:cursor-pointer text-xl text-stone-600"
            onClick={closeModal}
          />
        </div>
        <div className="p-1 mt-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 w-full rest-frm  bg-opacity-65 rounded items-start  "
          >
            <div className="flex flex-col md:flex-row w-full justify-evenly gap-3">
              <div className="flex flex-col gap-3 basis-1/2">
                <input placeholder="Restaurant Name" name="name" required />
                <input placeholder="Country" name="country" required />
                <input placeholder="State" name="state" required />
                <input placeholder="City" name="city" required />
                <input placeholder="Address" name="address" required />
                <textarea placeholder="Description" name="description" />
              </div>
              <div className="flex flex-col basis-1/2 gap-3">
                <input
                  placeholder="Number"
                  type="text"
                  name="number"
                  required
                />
                <input placeholder="Email" type="email" name="email" required />
                <input
                  placeholder="Website URL (optional)"
                  type="text"
                  name="websiteURL"
                />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="px-6 max-w-36 w-36 text-sm md:text-base py-1"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRestaurantModal;
