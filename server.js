const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'bookmarks';

app.use(express.json());
app.use(express.static('public'));

const bookmarkController = require('./controllers/bookmarks.js');
app.use('/bookmarks', bookmarkController);

app.listen(PORT, ()=>{
    console.log('listening...');
});

mongoose.connect(MONGODB_URI, {useNewUrlParser:true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});
