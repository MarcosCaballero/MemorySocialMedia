import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res
      .status(404)
      .json({ message: "No se encontro un post con ese id" });
  } else {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    return res.json(updatedPost);
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res
      .status(404)
      .json({ message: "No se encontro un post con ese id" });
  } else {
    await PostMessage.findByIdAndRemove(_id);
    res.json({ message: "Post deleted successfully" });
    console.log("DELETE!");
  }
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res
      .status(404)
      .json({ message: "No se econtro ningun post con ese id" });
  } else {
    const post = await PostMessage.findById(_id);

    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      {
        likeCount: post.likeCount + 1,
      },
      {
        new: true,
      }
    );

    return res.json(updatedPost);
  }
};
