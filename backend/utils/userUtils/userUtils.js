const User = require("../../models/user.models");

const userExists = async (email) => {
  const user = await User.findOne({ email });
  if (user) return true;
  return false;
};

const createUser = async (newUser) => {
  const user = await User.create(newUser);
  const userToReturn = await User.findById(user._id).select("-password");
  return userToReturn;
};

const findUser = async (email) => {
  const user = await User.findOne({ email });
  if (!user) return false;
  return user;
};

module.exports = {
  userExists,
  createUser,
  findUser,
};
