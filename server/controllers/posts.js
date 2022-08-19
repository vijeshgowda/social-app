import postMsg from "../models/postMsg.js";

export const getPosts = async (req, res) => {
    try {
        const tempMsg = await postMsg.find();
        res.status(200).json(tempMsg);
    } catch (error) {
        res.status(404).json( {message: error.message} );
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMsg(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json( {message: error.message} );
    }
};