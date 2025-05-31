import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";

export const getPosts = async (req, res) => {
  try {
    const { title, page, limit } = req.query;
    const where = title ? { title } : {};
    const options = {
      where,
      include: [{ model: User, attributes: ['id', 'name', 'email'] }]
    };

    if (page && limit) {
      options.limit = parseInt(limit);
      options.offset = (parseInt(page) - 1) * parseInt(limit);
    }

    const response = await Post.findAll(options);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const response = await Post.findOne({
      where: { id: req.params.id },
      include: [{ model: User, attributes: ['id', 'name', 'email'] }]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    await Post.create(req.body);
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    await Post.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: "Post updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
