const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
name: String,
descripcion: String
});

const BlogPost = mongoose.model('Projects', BlogPostSchema);

module.exports = BlogPost


