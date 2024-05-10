const bcrypt = require('bcrypt');

const validatePassword = async (password, enteredPassword) => {
  console.log("hii")
  const validPassword = await bcrypt.compare(password, enteredPassword)
  console.log("bye")
  if (validPassword) return true
  return false
}

module.exports = validatePassword;