const Menu = require("../../models/menu.models");

const menuExists = async (name, restaurantId) => {
  const menu = await Menu.findOne({
    $and: [{ restaurantId: restaurantId }, { name: name }],
  }); //this query ensures that the document returned must satisfy both conditions
  if (menu) return true;
  return false;
};

const menuCreate = async (newMenu) => {
  const menu = await Menu.create(newMenu);
  return menu;
};

const menuFind = async (restaurantId) => {
  const menu = await Menu.find({ restaurantId });
  return menu;
};

const menuUpdate = async (id, data) => {
  const updatedMenu = await Menu.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true,
  });
  return updatedMenu;
};

const menuDelete = async (id) => {
  const deletedMenu = await Menu.findByIdAndDelete(id);
  console.log(deletedMenu);
  return deletedMenu;
};

module.exports = {
  menuExists,
  menuCreate,
  menuUpdate,
  menuDelete,
  menuFind,
};
