const express = require('express');
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')


router.get(`/`, (req, res) => {
    res.json({
        backend: '🔥'
    })
})


router.post(`/addAPost`, (req, res) => {
    Post.create({ message: req.body.message })
        .then(post => {
            res.json({ post })
        }).catch(console.error)
})


router.get('/getPosts', (req, res) => {
    Post.find({}).then(allPostsFromDb => {
        res.json(allPostsFromDb)
    })
})


module.exports = router