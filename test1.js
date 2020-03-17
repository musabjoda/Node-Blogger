const mongoose = require('mongoose')

const Country = require('./database/models/Country')
mongoose.connect('mongodb://localhost/node-js-test-blog')
Country.create({
    name : 'Sudan',
    location : 'Africa'
},(error,country) =>{
    console.log(error,country)
})
