const generateToken = require('../utils/authUtils/generateToken');
const { userExists, createUser, findUser } = require('../utils/userUtils/userUtils');
const hashPassword = require('../utils/authUtils/hashPassword');
const validatePassword = require('../utils/authUtils/validatePassword');
const { entityAlreadyExists, entityCreatedSuccessfully, entityNotExist, InvalidRequestBody, InternalServerError, sendEntityResponse } = require('../utils/errorResponse')

const register = async (req, res) =>  {
  try {
    const { firstName, lastName, email, role, password } = req.validatedData;
    const user = await userExists(email)
    if (user) {
      return entityAlreadyExists(res, "User")
    }


    const hashedPassword = await hashPassword(password)

    const newUser = {
      firstName,
      lastName,
      email,
      role,
      password: hashedPassword
    }
    const userToReturn = await createUser(newUser)

    return entityCreatedSuccessfully(res, "User")
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "Internal server error"
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.validatedData

    const user = await findUser(email)
    console.log(user)

    if (!user){
      return entityNotExist(res, "User")
    }
    const userPassword = user.password;
    const correctPassword = await validatePassword(password, userPassword)
    console.log(correctPassword)

    if (!user || !correctPassword) {
      return InvalidRequestBody(res)
    }
    
    const jwtToken = generateToken({ id: user._id, role: user.role });
    const data = {
      message: "User logged In ",
      userId: user._id,
      role: user.role,
      jwtToken
    }
    
    return sendEntityResponse(res, data)

  } catch (error) {
    console.log(error)
    return InternalServerError(res)
  }
}

module.exports = { register, login }