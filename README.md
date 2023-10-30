
# Book Management API

This is a RESTful API developed using Node.js for managing books. The API allows users to perform CRUD operations on books, including adding new books, viewing a list of all books, viewing details of a specific book by its ID, updating a book's details, and deleting a book.

## Features

- **Add a New Book**: Users can add a new book with details such as title, author, and summary.

- **View All Books**: Users can view a list of all books in the database.

- **View Book Details**: Users can view detailed information about a specific book by providing its ID.

- **Update Book Details**: Users can update the details of an existing book.

- **Delete a Book**: Users can delete a book from the database.

## Technologies Used

- **Node.js**: The API is built using Node.js, a JavaScript runtime.

- **Express.js**: Express.js is used as the web application framework for Node.js.

- **MongoDB**: MongoDB, a NoSQL database, is used for storing book data. You can utilize cloud solutions like MongoDB Atlas or set up a MongoDB instance on a local server or virtual machine.
## PRODUCTION URL :https://booklibrary-wuku.onrender.com
## API Endpoints

- **POST /api/addBook**: Add a new book. Requires title, author, and summary in the request body.

- **GET /api/getBooks**: Get a list of all books.

- **GET /api/book/:id**: Get details of a specific book by its ID.

- **PATCH /api/book/:id**: Update details of a specific book by its ID. Requires title, author, and summary in the request body.

- **DELETE /api/book/:id**: Delete a specific book by its ID.

## How to Run

1. Clone the repository: `git clone <repository-url>`

2. Install dependencies: `npm install`

3. Set up MongoDB:
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud-based MongoDB service)
   - [Install MongoDB](https://docs.mongodb.com/manual/installation/) (Official MongoDB installation guide)

 - Database link and password obtained from MongoDB Atlas and stored in `config.env` file.
- Credentials passed from `config.env` file to `db.js` file for MongoDB connection setup.
- "Connection Setup" section includes a concise code snippet demonstrating MongoDB connection using Mongoose.
- Parameters like `useNewUrlParser` and `useUnifiedTopology` utilized within `mongoose.connect()` function.
- "Testing the Connection" section provides a step-by-step guide for developers to confirm MongoDB connection.
- Developers encouraged to execute a test script or inspect console for 'DB connection successful!' message as a confirmation of successful connection.
   ```
   MONGODB_URI=<your-mongodb-connection-uri>
   ```

5. Run the server: `npm start`

## API Documentation

- Detailed API documentation, including request and response formats, can be found in the [API Documentation](API_DOCUMENTATION.md) file.

---

In the above README.md file, you can replace `<repository-url>` with the actual URL of your Git repository and `<your-mongodb-connection-uri>` with your MongoDB connection URI. Additionally, you can create an `API_DOCUMENTATION.md` file to document the API endpoints in detail, including request and response formats for each endpoint.
