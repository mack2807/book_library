const express = require('express')
const bookController = require('../controllers/BookController')

const router = express.Router()

router.get('/hii', (req, res)=>
{
  res.json({
    mess: "hello from "
  })
})

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router
  .route('/:id')
  .get(bookController.getBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook)

module.exports = router;