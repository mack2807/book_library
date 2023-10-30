const express= require('express');
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
dotenv.config({ path: './config.env' })
const bookRouter = require('./routes/bookRoutes');
require('./controllers/db')

app.use('/api', bookRouter)
const port = process.env.PORT || 3009
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
  })

module.exports = app


