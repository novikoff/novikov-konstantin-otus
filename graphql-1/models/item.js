const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: String,
    price: String,
    img: String,
    description: String,
    categoryId: String
})

module.exports = mongoose.model('Item',itemSchema);
