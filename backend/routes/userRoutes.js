import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
} from '../controllers/userController.js'

const router = express.Router()

//  Routes
router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
