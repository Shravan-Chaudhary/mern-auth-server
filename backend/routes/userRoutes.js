import express from 'express'
const router = express.Router()
import {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
} from '../controllers/userController.js'

//  Routes
router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router
