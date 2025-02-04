# Online Book Store API

This is a fully functional **Online Book Store API** built using **Node.js, Express.js**, and **MongoDB**. The API allows users to manage books, users, and orders in an online book store.

## Features

- **Books Management**: Add, update, delete, and retrieve all books or individual books by their unique ID.
- **Users Management**: Add, update, delete, and retrieve user information.
- **Orders Management**: Add, update, delete, and retrieve orders placed by users.
- **Live API**: The API is hosted on **Render** and is publicly accessible.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database for storing books, users, and orders data
- **Postman**: Tool for testing the API endpoints
- **Render**: Cloud service for hosting the backend

## Live API URL

The live API can be accessed at the following URL:

- **Live API Endpoint**: [https://product-deploy-w817.onrender.com](https://product-deploy-w817.onrender.com)

### Test the following API endpoints:
- **All Books**: [GET /api/books](https://product-deploy-w817.onrender.com/api/books)
- **Single Book (Example: B001)**: [GET /api/books/B01](https://product-deploy-w817.onrender.com/api/books/B01)
- **All Users**: [GET /api/users](https://product-deploy-w817.onrender.com/api/users)
- **All Orders**: [GET /api/orders](https://product-deploy-w817.onrender.com/api/orders)

## API Endpoints

### 1. Books

- **GET /api/books**: Retrieve all books
- **GET /api/books/:bookId**: Retrieve a single book by ID
- **POST /api/books**: Add a new book
- **PUT /api/books/:bookId**: Update a book's information
- **DELETE /api/books/:bookId**: Delete a book

### 2. Users

- **GET /api/users**: Retrieve all users
- **GET /api/users/:userId**: Retrieve a user by ID
- **POST /api/users**: Add a new user
- **PUT /api/users/:userId**: Update user information
- **DELETE /api/users/:userId**: Delete a user

### 3. Orders

- **GET /api/orders**: Retrieve all orders
- **GET /api/orders/:orderId**: Retrieve an order by ID
- **POST /api/orders**: Place a new order
- **PUT /api/orders/:orderId**: Update order details
- **DELETE /api/orders/:orderId**: Cancel an order

## Running Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/Thasniem/product_deploy.git
    cd product_deploy
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your **MongoDB** database. If you're using **MongoDB Atlas**, create an account and connect your database.

4. Set your environment variables in a `.env` file (if not already included):
    ```bash
    MONGO_URI=your_mongo_connection_string
    ```

5. Run the server:
    ```bash
    npm start
    ```

6. The API will now be running on `http://localhost:5000`.

## Postman Collection

You can use the Postman collection provided in the repository to test all of the endpoints.

## GitHub Repository

You can view the full code and more details in the repository:  
[GitHub Repository](https://github.com/Thasniem/product_deploy)

## Video Demo

Watch a video demonstrating the API in action, showcasing the **Postman operations** and the **live server** output.

## Contributions

Feel free to fork this project, raise issues, or submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
