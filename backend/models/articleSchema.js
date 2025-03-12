import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true, 
    },
    category: { 
      type: String, 
      required: true, 
      enum: ["Sports", "Politics", "Technology", "Space", "Health", "Entertainment", "Science", "Business"] 
    },
    tags: [
      {
        type: String,
      },
    ],
    imageUrl: {
      type: String,
      default: "/placeholder.svg",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    blocks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    publishedAt: { 
      type: Date, 
      default: Date.now 
    },
    //status: {
      //type: String,
      //enum: ["Draft", "Published"],
      //default: "Draft",
    //},
  },
  {
    timestamps: true,
  },
)

export default mongoose.model("Article", articleSchema);



