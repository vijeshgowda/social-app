import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,

    likeCount: {
        type: Number,
        default: 0
    },

    dislike: {
      type: Number,
      default: 0
    },

    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMsg = mongoose.model('postMsg', postSchema);

export default postMsg;