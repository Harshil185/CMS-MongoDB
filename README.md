# Name : Harshil S Dholakiya
# Project Title : CMS-MONGODB `Content Management System`
# Description : A simple CMS project for performing MongoDB CRUD operations.

## Github 
https://github.com/Harshil185/CMS-MongoDB

## Installation
To install this project, use the following commands:
1. Clone the repository:
   git clone https://github.com/Harshil185/CMS-MongoDB.git

<!-- Files -->
- db.js
- users.js
- content.js
- category.js
- comments.js

<!-- Connection file -->
db.js -- This JavaScript code snippet establishes a connection to a MongoDB database using the Node.js driver for MongoDB. It starts by importing the necessary MongoDB library, then defines the connection URL, and sets up a client to connect to the MongoDB server.
Upon successfully connecting to the server, it logs a confirmation message to the console and retrieves the specified database named 'CMS'. Finally, it exports the 'db' variable, allowing other parts of the application to access and interact with the MongoDB database.


<!-- User file -->
users.js -- This code defines a set of functions for user registration, login, update, and deletion in a MongoDB database. Here's a short description of each function:

1. `registration(uname, uemail, upassword, umobile_no, urole)`: This function is used for user registration. It validates the input parameters (user name, email, password, mobile number, and role), and if they meet the criteria, it inserts a new user document into the MongoDB "users" collection. It also includes some validation checks and returns appropriate messages on failure.

2. `login(uemail, upassword)`: This function is for user login. It validates the user's email and password, and if they match a document in the MongoDB "users" collection, it logs the user in and displays a success message.

3. `update()`: This function is used to update a user document in the MongoDB "users" collection. It removes an item from the "contents" array field for a specific user, and it can also insert a new document if the user is not found.

4. `delete1()`: This function deletes a user document from the MongoDB "users" collection based on the user's email.

In the code comments, there are examples of how to use these functions, including registration, login, update, and deletion operations with sample data. Please note that the functions return `false` on failure and display error messages, while displaying success messages when the operations are successful.


<!-- Content file -->
content.js -- This code appears to be a JavaScript script that interacts with a MongoDB database to perform various operations related to content management. Here's a short description of the key components and actions in the code:

1. Import Dependencies:
   - The code imports the `ObjectId` class from the "mongodb" library and a custom database module named "db."

2. Content Object:
   - Defines a `content` object representing a piece of content with attributes such as title, content body, user ID, category, comments, publish date, and a like count.

3. Inserting Content:
   - An asynchronous function `posts()` inserts the `content` object into the MongoDB "content" collection using the "insertOne" method.

4. Update Content:
   - An asynchronous function `update()` updates a content entry in the "content" collection by adding a user ID to the "user" field using the "updateOne" method.

5. Deleting Content:
   - An asynchronous function `delete1()` deletes a content entry with the specified title from the "content" collection using the "deleteOne" method.

6. Linking Content to User:
   - An asynchronous function `ContenttoUser()` updates a user document in the "users" collection by adding a content ID to the "contents" field.

7. Liking Content:
   - An asynchronous function `Like()` increments the "like" count for a specific content entry in the "content" collection.

8. Function Calls:
   - The code includes function calls at the end to execute the defined operations. These calls are currently commented out, so they won't run unless uncommented.

The script primarily focuses on content management in a MongoDB database, including inserting, updating, deleting, and associating content with users. To perform these actions, it relies on the "db" module for database operations.


<!-- Category file -->
category.js -- This JavaScript code is a snippet for managing categories in a database. It utilizes a module named "db" for database operations. The main features are:

1. It defines an asynchronous function called `category`, which adds a category with the name "News" to the "category" collection in the database. It includes error handling and displays a success message upon adding the category.

2. It defines another asynchronous function called `deleteCategory`, which deletes a category with the name "Sports" from the "category" collection in the database. Like the `category` function, it includes error handling and displays a success message upon deleting the category.

3. The `category` function is called, so it adds a "News" category to the database.

4. The `deleteCategory` function is currently commented out, so it won't execute unless the comment markers are removed.

This code demonstrates the basic operations of adding and deleting categories in a database using the "db" module.


<!-- Comment file -->
comments.js -- This code is a JavaScript script that interacts with a MongoDB database to perform two operations: inserting a comment and deleting a comment.

1. The script first imports the necessary libraries and connects to the MongoDB database using the "db" module.

2. The `comments` function is defined as an asynchronous function. Inside this function, a new comment is inserted into the "comments" collection in the database with a comment text and a timestamp.

3. If the insertion is successful, it logs "Successfully Commented." Otherwise, if an error occurs during insertion, it logs "Error in Inserting Comment."

4. The `deleteComment` function is also defined as an asynchronous function. Inside this function, a comment with a specific ObjectId is deleted from the "comments" collection.

5. If the deletion is successful, it logs "Document Deleted." Otherwise, if an error occurs during deletion, it logs "Error while deleting Document."

6. Finally, the `comments` function is called to insert a comment into the database. You can also call the `deleteComment` function by uncommenting the last line to delete a specific comment with the specified ObjectId.

This code is meant to demonstrate basic operations like inserting and deleting comments in a MongoDB database and could be used as a foundation for building more advanced features in a larger application.

