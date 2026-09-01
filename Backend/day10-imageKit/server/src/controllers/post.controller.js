import { sendFiles } from "../services/storage.service.js";
import postModel from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    if (!caption || !file) {
      return res.status(400).json({
        success: false,
        message: "Caption and image is required",
      });
    }

    const uploadImage = await sendFiles(file.buffer, file.originalname);

    const post = await postModel.create({
      caption,
      image: uploadImage.url,
    });

    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("CREATE POST ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const post = await postModel.find();

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
