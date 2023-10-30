const Book = require('../model/bookModel')

// GET ALL BOOKS

exports.getAllBooks= async(req,res)=>{
    try{
        const books= await Book.find()
        res.status(200).json({
            status:'success',
            results:books.length,
            data:{
                books
            }
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}

// GET BOOKS BY ID
exports.getBook = async (req, res) => {
  const {id} = req.params;
  // console.log('hii',id)
    try {
      if(!id){
        return res.status(404).json
        ({
          message: "Please Provide Book ID"
        } ) 
      }
      const book = await Book.findById(id);

      res.status(200).json({
        status: 'success',
        data: {
          book
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err.message
      })
    }
  }

  //CREATE A BOOK

  exports.createBook= async(req, res)=>{
    try{
        const newBook= await Book.create(req.body)

        res.status(200).json({
            status:'success',
            data:{
                book:newBook
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
          });

    }
  }

  //UPDATE BOOK

  exports.updateBook= async(req,res)=>{
    try{
      const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
          });
      
          res.status(200).json({
            status: 'Book Updated SuccessFully',
            data: {
              book
            }
          });
    }catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
  }

  //DELETE BOOK

  exports.deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
      console.log('hii', req.params.id)
     
      await Book.findByIdAndDelete(id);
  
      res.status(200).json({
        status: 'Book Delete SuccessFully',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  }; 