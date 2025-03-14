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


