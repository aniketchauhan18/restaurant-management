const bcrypt = require("bcrypt");

const validatePassword = async (password, enteredPassword) => {
  console.log("hii");
  const validPassword = await bcrypt.compare(password, enteredPassword);
  console.log(validPassword);
  if (!validPassword) return false;
  return true;
};

module.exports = validatePassword;
