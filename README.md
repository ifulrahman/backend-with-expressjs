# REST API CRUD - Users & Posts (Node.js, Express.js, Sequelize, MySQL)

This is a REST API CRUD built with **Node.js**, **Express.js**, and **Sequelize** to manage **Users** and **Posts** data.  
The API allows creating, reading, updating, and deleting user and post records with relational support between tables.  
It also includes search functionality, pagination, and validations to enhance the API’s robustness.

---

## Key Features
- CRUD operations for the **Users** table
- CRUD operations for the **Posts** table
- Relationship between **Posts** and **Users** (`posts.user_id` → `users.id`)
- Unique email validation for **Users**
- `user_id` validation in **Posts** must refer to an existing user
- Search posts by **title**
- Pagination for posts with `page` & `limit` query parameters

---

## Technologies Used
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Postman (for testing)
