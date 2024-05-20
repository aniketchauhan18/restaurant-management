import { useState } from "react";
import CreateRestaurantModal from "./CreateRestaurantModal";

function CreateRestaurant() {
  const [showRestaurantModal, setShowRestaurantModal] = useState(false)

  const showModal = () => {
    setShowRestaurantModal(true)
  }

  const closeModal = () => {
    setShowRestaurantModal(false)
  }

  return (
    <div className=" flex font-inter justify-center w-full h-dvh p-3 mb-5">
      <div className="flex flex-col w-full">
        <p className="flex justify-center rest-header text-4xl w-full  font-lato font-bold mb-5">
          Create Restaurant
        </p>
        <button onClick={showModal}>
          create
        </button>
        <div>
          { showRestaurantModal && <CreateRestaurantModal closeModal={closeModal}/>}
        </div>
      </div>
    </div>
  );
}

export default CreateRestaurant;
