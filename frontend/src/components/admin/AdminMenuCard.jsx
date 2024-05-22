function MenuCard({ name, price, description }) {
  return (
    <div className="flex flex-col border p-2 rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1529270296466-b09d5f5c2bab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-60 rounded mb-0.5"
      />
      <div className="flex flex-col">
        <p className="font-inter text-stone-800 text-sm sm:text-base">{name}</p>
        <p className="font-inter text-stone-600 text-sm">${price}</p>
        <p className="font-inter text-stone-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default MenuCard;
