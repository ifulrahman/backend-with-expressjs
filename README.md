# 🚀 REST API CRUD - Users & Posts (Node.js, Express.js, Sequelize, MySQL)

Ini adalah REST API CRUD menggunakan **Node.js**, **Express.js**, dan **Sequelize** untuk mengelola data **Users** dan **Posts**.  
API ini memungkinkan untuk membuat, membaca, memperbarui, dan menghapus data pengguna dan postingan dengan relasi antar tabel.  
Dilengkapi fitur pencarian, pagination, dan validasi yang memperkuat fungsionalitas API ini.

---

## 📚 Fitur Utama
- CRUD untuk tabel **Users**
- CRUD untuk tabel **Posts**
- Relasi antara **Posts** dan **Users** (`posts.user_id` → `users.id`)
- Validasi email unik pada **Users**
- Validasi `user_id` pada **Posts** harus valid
- Pencarian posting berdasarkan **title**
- Pagination untuk posting dengan query `page` & `limit`

---

## ⚙️ Teknologi yang Digunakan
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Postman (untuk testing)
