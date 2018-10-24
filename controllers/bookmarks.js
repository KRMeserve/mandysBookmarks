const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmarks.js');

router.get('/', (req, res)=>{
    Bookmark.find({}, (error, allBookmarks)=>{
        res.json(allBookmarks);
    });
});

router.post('/', (req, res)=>{
    Bookmark.create(req.body, (error, createdBookmark)=>{
        res.json(createdBookmark);
    });
});

router.delete('/:id', (req, res)=>{
    Bookmark.findByIdAndRemove(req.params.id, (error, deletedBookmark)=>{
        res.json(deletedBookmark);
    });
});

router.put('/:id', (req, res)=>{
    Bookmark.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedBookmark)=>{
        res.json(updatedBookmark);
    });
});

module.exports = router;
