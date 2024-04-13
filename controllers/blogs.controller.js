const {Blogs} = require('../models/blogs.model');

const createBlog = async(req, res) => {
    const {title, description, image} = req.body;
    if(!image) return res.status(400).json("Image field is required");

    const newBlog = await Blogs.create({
        title,
        description,
        image
    });
    res.status(201).json({message: "Blog created", newBlog})
}

const findSingleBlogById = async(req, res) => {
    try{
        const {id} = req.params;
        const blog = await Blogs.findById(id);
        if(!blog) return res.status(404).json({message: "Blog not found"});

        res.status(200).json({blog})
    }
    catch(error) {
        throw new Error(error)
    }
};

// <=================== GET ALL BLOGS =====================>
const findAllBlogs = async(req, res) => {
    const blogs = await Blogs.find({});
    if(!blogs) return res.status(404).json({message: "Blogs not found"})

    res.status(200).json({blogs})
};

const updateBlog = async(req, res) => {
    const {image, title, description} = req.body;
    const {id} = req.params;
    const blog = await Blogs.findByIdAndUpdate(id, {
        title,
        description,
        image
    }, {
        new: true
    })
    if(!blog) res.status(400).json({message: "Blog failed to be updated"})

    res.status(200).json({message: "Blog has been updated", blog})
}

const deleteBlog = async(req, res) => {
    try{
        const blog = await Blogs.findByIdAndDelete(id);
        if(!blog) res.status(404).json({message: "Blog not found"})
    }
    catch(error){
        throw new Error(error)
    }
}

module.exports = {createBlog, findSingleBlogById, findAllBlogs, deleteBlog, updateBlog}