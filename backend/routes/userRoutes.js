import express from "express";
import { 
    createAndPublishArticle,
    getMyArticles,
    deleteArticle
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create-article", createAndPublishArticle);
router.get("/my-articles/:userId", getMyArticles);
router.delete("/articles/:articleId", deleteArticle);


export default router;
