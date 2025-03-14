import User from '../models/userSchema.js'
import Article from '../models/articleSchema.js';

export const createAndPublishArticle = async (req, res, next) => {
    const { title, description, content, category, tags, author, imageUrl } = req.body.articleData
    console.log(author);
    

    try {
        const newArticle = new Article({
            title,
            description,
            content,
            category,
            tags: tags,
            imageUrl,
            author,
            status: "Published",
        })
        await newArticle.save()

        res.status(201).json({ message: "Article published successfully!", article: newArticle });

    } catch (error) {
        next(error);
    }
};

export const getMyArticles = async (req, res, next) => {    
    try {
        const { userId } = req.params;    
        if (!userId) {
            return next({message: "User ID is required", statusCode: 400})
        }
        const articles = await Article.find({ author: userId}).sort({createdAt: -1})           
        res.status(200).json(articles);        
    } catch (error) {        
        next(error)
    }
            
};
export const deleteArticle = async (req, res, next) => {
    try {
        const { articleId } = req.params;
        console.log(articleId);
        
        if (!articleId) {
            return next({message: "Article ID is required", statusCode: 400})
        }
        const deletedArticle = await Article.findByIdAndDelete(articleId);
        if (!deletedArticle) {
            return next({ message: "Article not found", statusCode: 404 });
        }
        res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        next(error)
    }
};
export const getArticleById = async (req, res, next) => {
    const { articleId } = req.params;
    try {
      if (!articleId) {
          return next({message: "Article ID is required", statusCode: 400})
      }
      const article = await Article.findById(articleId);
      if (!article) {
          return next({ message: "Article not found", statusCode: 404 });
      }
      res.status(200).json(article);        
    } catch (error) {
        next(error)
    }
};
export const updateArticle = async (req, res, next) => {
    const { articleId } = req.params;
    const updation = req.body;
    
    try {
      if (!articleId) {
          return next({message: "Article ID is required", statusCode: 400})
      }
      const updatedArticle  = await Article.findByIdAndUpdate(
        articleId,
        { $set: updation },
        { new: true }
      );
      if (!updatedArticle) {
          return next({ message: "Article not found", statusCode: 404 });
      }
      res.status(200).json(updatedArticle);        
    } catch (error) {
        next(error)
    }
};



