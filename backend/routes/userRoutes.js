import express from "express";
import { 
    createAndPublishArticle,
    getMyArticles,
    deleteArticle,
    getArticleById,
    updateArticle
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create-article", createAndPublishArticle);
router.get("/my-articles/:userId", getMyArticles);
router.delete("/articles/:articleId", deleteArticle);
router.get("/articles/:articleId", getArticleById);
router.patch("/articles/:articleId", updateArticle);


export default router;
