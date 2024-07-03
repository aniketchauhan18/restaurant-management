const Restaurant = require("../models/restaurant.models");
const {
  restaurantExists,
  createRestaurant,
  findRestaurant,
  restaurantUpdate,
  restaurantDelete,
  findRestaurantByUserId,
  findRestaurantById,
  findRestaurantsWithPagination,
} = require("../utils/adminUtils/restaurantUtils");
const {
  entityAlreadyExists,
  entityCreatedSuccessfully,
  entityNotExist,
  InvalidRequestBody,
  InternalServerError,
  entityDeletedSucessfully,
  sendEntityResponse,
} = require("../utils/errorResponse");

const register = async (req, res) => {
  try {
    const { validatedData } = req;

    const checkRestaurant = await restaurantExists(validatedData.email);
    if (checkRestaurant) return entityAlreadyExists(res, "Restaurant");
    const restaurant = await createRestaurant({
      ...validatedData,
      userId: req.user.id,
    });

    return res.status(200).json({ restaurant });
  } catch (error) {
    console.log("--------------------------------------");
    console.log("Error: ", error);
    return InternalServerError(res);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const restaurants = await findRestaurant();
    if (!restaurants) return entityNotExist(res, "Restaurant");
    return sendEntityResponse(res, restaurants);
  } catch (error) {
    console.log("Error in getRestaurant: ", error);
    return InternalServerError(res);
  }
};

const getRestaurantWithPagenation = async (req, res) => {
  try {
    let { page, limit } = req.query;
    (page = parseInt(page, 10) || 1), (limit = parseInt(limit, 10) || 10);
    const skip = (page - 1) * limit;
    const { restaurants, totalRestaurants } =
      await findRestaurantsWithPagination(skip, limit);
    const totalPages = Math.ceil(totalRestaurants / limit);
    const isLastPage = page >= totalPages;
    return res.status(200).json({
      data: restaurants,
      meta: {
        totalRestaurants,
        totalPages,
        isLastPage,
      },
    });
  } catch (err) {
    console.log("Error in getRestaurantWithPagenation", err);
    return InternalServerError(res);
  }
};

const getRestaurantByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const restaurants = await findRestaurantByUserId(req.params.id);
    if (!restaurants) return entityNotExist(res, "Restaurant");
    return sendEntityResponse(res, restaurants);
  } catch (err) {
    console.log(err);
    return InternalServerError(res);
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await findRestaurantById(req.params.id);
    if (!restaurant) return entityNotExist(res, "Restaurant");
    return sendEntityResponse(res, restaurant);
  } catch (err) {
    console.log(err);
    return InternalServerError(res);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    const data = req.body;
    const updatedRestaurant = await restaurantUpdate(restaurant._id, data);
    if (!updatedRestaurant) return entityNotExist(res, "Restaurant");

    return res.status(200).json({ message: "Restaurant updated successfully" });
  } catch (error) {
    console.log("Error in updateRestaurant", error);
    return InternalServerError(res);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await restaurantDelete(req.params.restaurantId);
    if (!deletedRestaurant) {
      return entityNotExist(res, "Restaurant");
    }
    return entityDeletedSucessfully(res, "Restaurant");
  } catch (error) {
    console.log("Error in deleteRestaurant: ", error);
    return InternalServerError(res);
  }
};

module.exports = {
  register,
  getRestaurantById,
  getRestaurantByUserId,
  deleteRestaurant,
  updateRestaurant,
  getRestaurant,
  getRestaurantWithPagenation,
};
