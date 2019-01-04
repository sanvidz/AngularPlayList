// include mongoose(to convert the data into js object)
const mongoose = require('mongoose');

// define schema
const Schema = mongoose.Schema;

// create our own schema or blueprint

const videoSchema = new Schema({
    title: String,
    url: String,
    description: String
});

// now create a model from the schema
module.exports = mongoose.model('video', videoSchema, 'videos');