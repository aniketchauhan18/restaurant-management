const Menu = require('../../models/menu.models')

const menuExists = async(name) => {
  const menu = await Menu.findOne({name});
  if (menu) return true
  return false
}

const menuCreate = async(newMenu) => {
  const menu = await Menu.create(newMenu)
  return menu
}

const menuFind = async(restaurantId) => {
  const menu = await Menu.find({restaurantId})
  return menu
}

const menuUpdate = async(id, data) => {
  const updatedMenu = await Menu.findOneAndUpdate({_id: id}, data, {new: true, runValidators: true})
  console.log(';;;;;;;')
  console.log(updatedMenu)
  console.log(';;;;;;;')

  return updatedMenu
}

const menuDelete = async(id) => {
  const deletedMenu = await Menu.findByIdAndDelete(id)
  return deletedMenu
}

module.exports = {
  menuExists,
  menuCreate,
  menuUpdate,
  menuDelete,
  menuFind
}