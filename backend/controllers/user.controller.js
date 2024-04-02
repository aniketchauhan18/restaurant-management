const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const {
  userRegisterationSchema,
  userLoginSchema
} = require('../auth/schemas/user.schema');
const generateToken = require('../utils/generateToken');

const register = async (req, res) =>  {
  try {
    const { success, data } = userRegisterationSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        error: "Invalid request body"
      })
    }

    const {
      firstName,
      lastName,
      email,
      role,
      password
    } = data;

    const userExists = await User.findOne({email})
    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      })
    }

    // hashing the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      role,
      password: hashedPassword
    })

    // returning the user without hashedPassword
    const userToReturn = await User.findById(newUser._id).select('-password');
    res.status(200).json({
      message: "User created successfully",
      userToReturn
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
    const { success , data } = userLoginSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        error: "Invalid request body"
      })
    }

    const {
      email,
      password
    } = data
    
    const user = await User.findOne({ email });
    
    // checking the password
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) {
      return res.status(400).json({
        error: "Invalid password"
      })
    }

    if (!user || !password) {
      return res.status(400).json({
        error: "Invalid username or password"
      })
    }


    

    const userToReturn = await User.findById(user._id).select('-password');
    const jwtToken = generateToken({
      id: userToReturn._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email,
      role: user.role
    });
    
    return res.cookie("token", jwtToken).status(200).json({
      message: "User logged In "
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: "Internal server error"
    })
  }
}

module.exports = {
  register,
  login
}