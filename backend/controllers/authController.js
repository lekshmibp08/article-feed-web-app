import User from '../models/userSchema.js'
import Otp from '../models/otpSchema.js'
import { sendEmail } from '../services/emailService.js';
import bcrypt from 'bcryptjs'

export const sendOtp = async (req, res, next) => {
    const { email } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next({ statusCode: 400, message: "Email already exists!" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        console.log('OTP : ', otp);

        const otpEntity = new Otp({
          email,
          otp,
          expiresAt: new Date(Date.now() + 1 * 60 * 1000), // OTP expires in 15 minutes
        });
        await otpEntity.save();

        await sendEmail(
            email, 
            'Your OTP for Signup Verification', 
            `Your OTP is ${otp}. It expires in 60 seconds.`
        );
        

        res.status(200).json({ message: "OTP sent successfully" });

    } catch (error) {
        next(error);
    }
};
export const verifyOtpAndRegisterUser = async (req, res, next) => {
    const { email, otp, firstName, lastName, phone, password, preferences } = req.body;

    try {
        const otpExists = await Otp.findOne({ email, otp });
        if(!otpExists || new Date() > otpExists.expiresAt ) {
            return next({ statusCode: 400, message: "Invalid or expired OTP"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName, lastName, email, phone, password: hashedPassword, preferences
        })

        await Otp.deleteOne({ email });
        
        res.status(201).json({ message: "OTP verified and User registered successfully, You can now log in..!"});

    } catch (error) {
        next(error);
    }
};

