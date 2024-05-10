const Restaurant = require('../../models/restaurant.models')

const restaurantExists = async(email) => {
  const restaurant = await Restaurant.findOne({ email });
  if(restaurant) return true
  return false
}

const createRestaurant = async(newRestaurant) => {
  const restaurant = await Restaurant.create(newRestaurant)
  return restaurant
}

const findRestaurant = async () => {
  const restaurant = await Restaurant.find({})
  return restaurant
}

const restaurantUpdate = async (id , data) => {
  const updatedRestaurant = await Restaurant.findOneAndUpdate(id, data, {runValidators: true})
  return updatedRestaurant
}

const restaurantDelete = async (id) => {
  const deletedRestaurant = await Restaurant.findByIdAndDelete(id)
  return deletedRestaurant
}

module.exports = {
  restaurantExists,
  createRestaurant,
  findRestaurant,
  restaurantUpdate,
  restaurantDelete
}