import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen || <button className="px-2 text-sm md:text-base" onClick={toggleModal}>
        Create Restaurant
      </button>}
      {isOpen && (
        <div className="w-[90%]  ">
          <div className="relative">
            <span className="close-button absolute top-0 left-0 hover:cursor-pointer p-3" onClick={toggleModal}>
              <IoMdClose 
                className="text-base md:text-2xl text-zinc-600"
                onClick={toggleModal}
              />
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;