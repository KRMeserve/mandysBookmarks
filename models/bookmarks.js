const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarkSchema = Schema({
    title: String,
    url: String
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
