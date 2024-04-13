const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    description: {
        type: String,
        required: true,
        min: 5,
        max: 300
    },
    image: {
        type: String,
        required: true
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    totalLikes: {
        type: Number,
    }
}, {
    timestamps: true
});

const Blogs = mongoose.model('blogs', blogSchema);
module.exports = {Blogs}