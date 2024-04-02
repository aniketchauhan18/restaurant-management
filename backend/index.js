const express = require('express');
const connectDB = require('./db/dbConnection');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
const userRoutes = require('./routes/v1/user.routes');
const restaurantRoutes = require('./routes/v1/restaurant.routes');
const menuRoutes = require('./routes/v1/menu.routes');
const PORT = process.env.PORT || 3000;


dotenv.config({
  path: '.env'
})
connectDB()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // so that fe can get store cookies
}))

app.use(express.json({limit: '16kb'})) // limit the size of the json file
app.use(cookieParser());

//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/restaurants', restaurantRoutes);
app.use('/api/v1/menus', menuRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))