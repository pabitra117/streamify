import express from "express";
import { login, logout, onboard, signup } from '../controllers/auth_controllers.js';
import { protectRoute } from "../middleware/auth_middleware.js";

const router = express.Router()

router.post("/signup", signup);
router.post("/login",login);
router.post("/logout",logout);

router.post("/onboarding", protectRoute, onboard)

export default router;