import express from "express";
import { createAndPublishArticle } from "../controllers/userController.js";

const router = express.Router();

router.post("/create-article", createAndPublishArticle);


export default router;
