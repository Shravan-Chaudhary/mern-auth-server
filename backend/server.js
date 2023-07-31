import express, {urlencoded} from 'express'
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config()
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users/', userRoutes)
app.get('/', (req, res) => res.send('Server is ready'))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port: ${port}`))


// POST-  /api/users - Register a User
// POST-  /api/users/auth - Authenticate a User and get token
//POST-   /api/users/logout - Logout User and clear Cookie
//GET-    /api/users/profile - Get User Profile
//PUT-    /api/users/profile - Update User's Profile
// 78-  https://10fastfingers.com/share-badge/1_CA