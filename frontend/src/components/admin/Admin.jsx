import { Link, useParams } from "react-router-dom";

function Admin() {
  const linkClasses =
    "bg-scarlet-400 text-white py-1 px-2 rounded-sm hover:bg-scarlet-500 transition ease-in-out duration-300 font-lato";

  const { id } = useParams() // /admin/restaurants/:id

  return (
    <div className="flex justify-center items-center h-dvh gap-4 ">
      <Link to={`/admin/createrestaurant/${id}`} className={linkClasses}>
        Create Restautant
      </Link>
      <Link to={`/admin/restaurants/${id}`} className={linkClasses}>
        See Restaurant
      </Link>
    </div>
  );
}

export default Admin;
