const mongoose = require('mongoose')


const CountrySchema = new mongoose.Schema({
    name :String,
    location :String
})
const Country=mongoose.model('Country',CountrySchema)
module.exports=Country