const route = require('express').Router();
const { response } = require('express');
const Blog = require('../models/Blog');

route.post('/post', (req, res) => {

    const { title, des } = req.body;

    if (!title || !des) {
        return res.status(400).json({ error: "Todos los campos son obligatorio" });
    }

    const blogPost = Blog({
        title,
        des,
    });

    Blog.create(blogPost).
        then((resData)=> {
            res.json({ PostResult: resData, message:"Post creado"});
        })
        .catch((err) => {
            console.log(err);
        })

});


route.get('/getData', (req, res) => {
    Blog.find({})
        .sort({ date: "DESC" })
        .then((resultData) => {
            res.json(resultData);
        })
        .catch((err) => {
            console.log(err);
        });
});


module.exports = route;