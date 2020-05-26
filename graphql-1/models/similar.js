const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const similarSchema = new Schema({
    targetId: String,
    similar: []
})

module.exports = mongoose.model('Similar',similarSchema);
