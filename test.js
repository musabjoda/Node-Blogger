const mongoose = require('mongoose')

const Post = require('./database/models/Post')
mongoose.connect('mongodb://localhost/node-js-test-blog')

// Post.create({

//     title: 'Second Blogger',
//     desc : 'Its Not Post Is Greate',
//     content: 'Loream Ispum'
// },(error, post)=>{
// console.log(error,post)
// })

// Post.findById('5e6e5c87190fcd871cd165ba',(error,post)=>{
//     console.error(post);
    
// })
// Post.findByIdAndUpdate('5e6e5c87190fcd871cd165ba',{
//     title: 'Normal Post'
// },(error,post)=>{
//     console.error(post)
// })

Post.findByIdAndRemove('5e6e5c87190fcd871cd165ba',(error,post)=>{
console.log(error,post)
})


// Post.find({
//     title: 'Second Blogger'
// },(error,posts)=>{
//     console.log(error,posts)
// })