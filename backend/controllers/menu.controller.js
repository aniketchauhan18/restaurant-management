const { menuExists, menuCreate, menuDelete, menuUpdate, menuFind  } = require('../utils/adminUtils/menuUtils');
const { entityAlreadyExists, entityCreatedSuccessfully, entityNotExist, InvalidRequestBody, InternalServerError, entityDeletedSucessfully, sendEntityResponse,entityUpdatedSuccessfully } = require('../utils/errorResponse')

const createMenu = async (req, res) => {
  try {
    
    const restaurantId = req.params.restaurantId;
    const { menuValidatedData } = req
    console.log("createMenu")
  
    const menuExist = await menuExists(menuValidatedData.name, restaurantId)

    console.log(menuExist)

    if (menuExist) return entityAlreadyExists(res, "Menu")
    const newMenu = await menuCreate( {...menuValidatedData, restaurantId} )
    console.log(newMenu)

    return entityCreatedSuccessfully(res, "Menu")

  } catch (error) {
    console.log(error);
    return InternalServerError(res)
  }
}

const getMenu = async (req, res) => {
  try {
    const menuData = await menuFind(req.params.restaurantId) // finding all the menus
    if (!menuData) return entityNotExist(res, "Menu")
    return sendEntityResponse(res, menuData)

  } catch (error) {
    console.log("Error in getMenu: ", error)
    return InternalServerError(res)
  }
}

const updateMenu = async (req, res) => {
  try {
    console.log('isnide updatemenu')
    console.log(req.params.menuId)
    const data = req.body;
    const menu = await menuFind(req.params.menuId);
    if (!menu) return entityNotExist(res, "Menu")
    console.log(data)
    const updatedMenu = await menuUpdate(req.params.menuId, data)
    console.log(updatedMenu)
    if (!updatedMenu) return entityNotExist(res, "Menu")
    return entityUpdatedSuccessfully(res, "Menu")

  } catch (error) {
    console.log("updateMenu", error)
    return InternalServerError(res)
  }
}

const deleteMenu = async(req, res) => {
  try {
    console.log('ionside delete menu')
    const deleteMenu = await menuDelete(req.params.menuId); // finding menu by id and deleting id
    if (!deleteMenu) return entityNotExist(res, "Menu")
    return entityDeletedSucessfully(res, "Menu")
  } catch (error) {
    console.log("Error in deleteMenu: ", error)
  }
}

module.exports = {
  createMenu,
  updateMenu,
  deleteMenu,
  getMenu
}