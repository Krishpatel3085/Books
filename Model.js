const mongoose =require("mongoose")

const Books = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    publicationYear: Number,
    description:String,
    BookNo:{
        type:String,
        required: true
    },
    language:String
})

module.exports = mongoose.model('Books', Books)  // books