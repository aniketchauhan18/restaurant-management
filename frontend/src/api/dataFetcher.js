export const deployBaseUrl = "https://restaurantapp-7atz.onrender.com"; //http://localhost:3000

export const fetchMenuData = async (restaurantId) => {
  const res = await fetch(`${deployBaseUrl}/api/v1/menus/${restaurantId}`);
  const data = await res.json();
  return data.data;
};

export const fetchRestaurants = async (id) => {
  const res = await fetch(`${deployBaseUrl}/api/v1/restaurants/user/${id}`);
  const data = await res.json();
  return data.data;
};

export const fetchRestaurantById = async (id) => {
  const res = await fetch(`${deployBaseUrl}/api/v1/restaurants/${id}`);
  const data = await res.json();
  console.log(data.data);
  return data.data;
};

export const fetchUserMenu = async (restaurantId) => {
  const res = await fetch(`${deployBaseUrl}/api/v1/menus/${restaurantId}`);
  const data = await res.json();
  console.log(data.data);
  return data.data;
};
