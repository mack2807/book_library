const mongoose= require('mongoose')

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'A book must have a title']
    },
    author:{
        type:String,
        required:[true, 'A book must have a author name']
    },
    summary:{
        type:String,
        required:[true, 'A book must have a summary']
    }
})

const Book= mongoose.model('Book',bookSchema)

module.exports= Book