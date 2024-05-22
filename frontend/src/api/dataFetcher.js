export const fetchMenuData = async (restaurantId) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/menus/${restaurantId}`
  );
  const data = await res.json();
  return data.data
}

export const fetchAdminRestaurats = async(id) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/restaurants/admin/${id}`
  );
  const data = await res.json();
  return data.data
}

export const fetchUserMenu = async(restaurantId) => {
  const res = await fetch(`http://localhost:3000/api/v1/menus/${restaurantId}`);
  const data = await res.json();
  return data.data
}