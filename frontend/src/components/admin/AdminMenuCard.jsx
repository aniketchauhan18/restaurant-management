import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import UpdateMenuModal from "./UpdateMenuModal";

function AdminMenuCard({ name, price, description, menuId }) {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const buttonClasses = "bg-zinc-400 px-2 text-sm font-inter py-1";
  console.log(menuId);

  const closeModal = () => {
    setShowModal(false);
  };

  const jwtToken = localStorage.getItem("admin-token");

  const handleDeleteMenu = async () => {
    if (window.confirm("Are you sure you want to delete this menu?")) {
      try {
        const res = await fetch(
          `http://localhost:3000/api/v1/menus/delete/${menuId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwtToken}`,
            },
          },
        );
        queryClient.invalidateQueries({ queryKey: ["menuData"] });
      } catch (err) {
        console.log(err);
        throw new Error("Error in deleting the");
      }
    }
  };

  return (
    <div className="flex flex-col border p-2 rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1529270296466-b09d5f5c2bab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-60 rounded mb-0.5"
      />
      <div className="flex flex-col">
        <p className="font-inter text-stone-800 text-sm sm:text-base">{name}</p>
        <p className="font-inter text-stone-600 text-sm">$ {price}</p>
        <p className="font-inter text-stone-500 text-sm">{description}</p>
      </div>
      <div className="flex justify-end gap-3 mt-2">
        <button
          className={`${buttonClasses} bg-storm-dust-700 hover:bg-storm-dust-600 duration-300`}
          onClick={() => setShowModal(true)}
        >
          Edit
        </button>
        <button
          className={`${buttonClasses} bg-red-500 hover:bg-red-600 duration-300`}
          onClick={handleDeleteMenu}
        >
          Delete
        </button>
      </div>
      {showModal && (
        <UpdateMenuModal
          name={name}
          price={price}
          description={description}
          menuId={menuId}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default AdminMenuCard;
