const path= require('path')
const {engine} = require('express-edge')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Post = require('./database/models/Post')
const app= express()
app.use(express.static('ui'))
mongoose.connect('mongodb://localhost/node-js-blog',{useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

app.use(express.static('views'))
app.use(engine)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('views',`${__dirname}/views`)

app.get('/',async (req,res) =>{
    // res.sendFile(path.resolve(__dirname, 'index.html'))
    const posts =await Post.find({})
    res.render('index',{
        posts
    }
    )
    // console.log(path.resolve(__dirname, 'index.html'))
})

app.post('/posts/store',(req,res) =>{
Post.create(req.body,(error, post)=>{
res.redirect('/')
})

})

app.get('/posts/addpost',(req,res) => {
    res.render('create')
})
app.get('/about' , (req,res) =>{
    res.render('about')
    // res.sendFile(path.resolve(__dirname, 'ui/about.html'))
})
app.get('/contact',(req,res) => {
    // res.sendFile(path.resolve(__dirname, 'ui/contact.html'))
    res.render('contact')
})
app.get('/post/:id',async (req,res) => {
    // res.sendFile(path.resolve(__dirname, 'ui/post.html'))   
    const post = await Post.findById(req.params.id)
    res.render('post',{
        post
    })
    console.log(post)
})

app.listen(3000,()=>{
    console.log('The Server Is Running')
})
