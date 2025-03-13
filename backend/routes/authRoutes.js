import express from "express";
import { 
    sendOtp,
    verifyOtpAndRegisterUser 
} from "../controllers/authController.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-and-register", verifyOtpAndRegisterUser);

export default router;
