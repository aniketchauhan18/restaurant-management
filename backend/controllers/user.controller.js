const generateToken = require('../utils/authUtils/generateToken');
const { userExists, createUser, findUser } = require('../utils/userUtils/userUtils');
const hashPassword = require('../utils/authUtils/hashPassword');
const validatePassword = require('../utils/authUtils/validatePassword');

const register = async (req, res) =>  {
  try {
    const { firstName, lastName, email, role, password } = req.validatedData;
    const user = await userExists(email)
    if (user) {
    return res.status(400).json({
      message: "User already exists"
    })
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
    res.status(200).json({
      message: "User created successfully"
    })
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

    if (!user) {
      return res.status(404).json({
        error: "User doesn't exists"
      })
    }
    const userPassword = user.password;
    const correctPassword = validatePassword(password, userPassword)
    
    if (!correctPassword) {
      return res.status(400).json({
        error: "Invalid password"
      })
    }

    if (!user || !password) {
      return res.status(400).json({
        error: "Invalid username or password"
      })
    }

    const userToReturn = await findUser(user._id)
    const jwtToken = generateToken({ id: userToReturn._id, role: user.role });
    
    return res.status(200).json({
      message: "User logged In ",
      userId: userToReturn._id,
      role: userToReturn.role,
      jwtToken
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

module.exports = { register, login }