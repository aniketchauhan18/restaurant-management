const Menu = require('../models/menu.models')
const { menuValidationSchema } = require('../auth/schemas/menu.schema')

const createMenu = async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try {
    const { success, data } = menuValidationSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        error: "Invalid create menu request body"
      })
    }
  
    const {
      name,
      price,
      description
    } = data
  
    const menuExists = await Menu.findOne({name});
    if (menuExists) {
      return res.status(400).json({
        error: "Menu with same name already exists"
      })
    }
  
    const newMenu = await Menu.create({
      name,
      price,
      description,
      restaurantId
    })
  
    res.status(200).json({
      message: "Menu created successfully",
      newMenu
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal Server error"
    })
  }
}

const getMenu = async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try {
    const menuData = await Menu.find({restaurantId}) // finding all the menus
    if (!menuData) {
      return res.satus(404).json({
        error: "menus not found"
      })
    }
    return res.status(200).json({
      message: "fetched data successfully",
      menuData
    })

  } catch (error) {
    console.log("Error in getMenu: ", error)
    return res.status(500).json({
      error: "Internal server error"
    })
  }
}

const upadteMenu = async (req, res) => {
  try {
    // const { success, data } = menuUpdationSchema.safeParse(req.body);
    // if (!success) {
      //   return res.status(400).json({
        //     error: "Invalid request body"
        //   })
        // }
    
    const id = req.params.menuId;
    const data = req.body;
    const menu = await Menu.findById(id);
    const updatedMenu = await Menu.findByIdAndUpdate(menu._id, data, { runValidators: true });
    if (!updatedMenu) {
      return res.status(404).json({
        error: "Menu not found"
      })
    }

    return res.status(200).json({
      message: "Menu updated successfully"
    })

  } catch (error) {
    console.log("updateMenu", error)
  }
}

const deleteMenu = async(req, res) => {
  try {
    const menuId = req.params.menuId;
    const deleteMenu = await Menu.findByIdAndDelete(menuId); // fidning menu by id and deleting id
    if (!deleteMenu) {
      return res.status(404).json({
        error: "Menu not found"
      })
    }

    return res.status(200).json({
      message: "Menu deleted successfully"
    })

  } catch (error) {
    console.log("Error in deleteMenu: ", error)
  }
}

module.exports = {
  createMenu,
  upadteMenu,
  deleteMenu,
  getMenu
}