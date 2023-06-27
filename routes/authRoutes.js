import express from 'express';
const router =express.Router();
import { loginUser,registerUser,logoutUser } from '../controllers/authController.js';
// login-route
router.post('/login',loginUser);

// register-route
router.post('/register',registerUser);


// logout 

router.get('/logout',logoutUser)

export default router;
