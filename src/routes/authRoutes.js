import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controllers/authController.js';

const router = Router();

router.post('/register', celebrate(registerUserSchema), registerUser);

router.post('/login', celebrate(loginUserSchema), loginUser);

router.post('/logout', logoutUser);

router.post('/refresh', refreshUserSession);

export default router;
