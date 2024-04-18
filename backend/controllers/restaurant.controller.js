const Restaurant = require('../models/restaurant.models');
const restaurantValidationSchema = require('../auth/schemas/restaurant.schema');

const register = async (req, res) => {
  try {
    const { success, data } = restaurantValidationSchema.safeParse(req.body);
    console.log(success)
    console.log(req.body)
    if (!success){
      return res.status(400).json({
        error: "Invalid request body"
      })
    }
    const {
      name,
      country, 
      state,
      city,
      address,
      description,
      number,
      email,
      websiteURL
    } = data

    const restaurantExists = await Restaurant.findOne({email});
    if (restaurantExists) {
      return res.status(400).json({
        error: "Restaurant already exists with same email"
      })
    }

    const newRestaurant = await Restaurant.create({
      name,
      country, 
      state,
      city,
      address,
      description,
      number,
      email,
      websiteURL,
      userId: req.user.id
    }); //check with data

    res.status(200).json({
      newRestaurant
    });

  } catch (error) {
    console.log("Error: ",error)
    return res.status(500).json({
      error: error.message
    })
  }
}

const getRestaurant = async ( req, res ) => {
  try {
    const restaurants = await Restaurant.find({}); // getting all the restaurants
    if (!restaurants) {
      return res.staus(404).json({
        error: "Restaurants not found"
      })
    }

    return res.status(200).json({
      restaurants
    })

  } catch (error) {
    console.log("Error in getRestaurant: ", error)
    return res.status(500).json({
      error: error.message
    })
  }
}

const getRestaurantById = async (req, res) => {
  try {
    const userId = req.params.id;
    const restaurants = await Restaurant.find({userId})
    if (!restaurants) {
      return res.staus(404).json({
        error: "Restaurants not found"
      })
    } 

    return res.status(200).json({
      restaurants
    })

  } catch(e) {
    console.lo
  }
}

const updateRestaurant = async (req, res) => {
  try {
    
    const id = req.params.restaurantId;
    const restaurant = await Restaurant.findById(id);
    const data = req.body;
    const updatedRestaurant = await Restaurant.findOneAndUpdate(restaurant._id, data, {runValidators: true});
    if (!updatedRestaurant) {
      return res.status(404).json({
        error: "Restaurant not found!!"
      })
    }

    return res.status(200).json({
      message: "Restaurant updated successfully"
    })
  } catch (error) {
    console.log("Error in updateRestaurant", error);
    return res.status(500).json({
      error: "Internal server error"
    })
  }
}

const deleteRestaurant = async (req, res) => {
  
  try {
    const id = req.params.restaurantId;

    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      return res.status(404).json({
        error: "restaurant not found"
      })
    }
    return res.status(200).json({
      message: "Restaurant deleted successfully"
    })

  } catch(error) {
    console.log("Error in deleteRestaurant: ", error)
    return res.status(500).json({
      error: "Internal server error"
    })
  }
}

module.exports = {
  register,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
  getRestaurant
}