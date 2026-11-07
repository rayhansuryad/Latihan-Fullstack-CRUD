const express = require ("express");

const app = express();

// Import routes
const  router = require ("./5.routes/productRoutes");
// Import middleware
const notFoundMiddleware = require("./6.middleware/notFoundMiddleware");
const errorHendler = require("./6.middleware/errorMiddleware");

// Middleware untuk membaca JSON dari request body
app.use(express.json());

// Middleware untuk membaca data from URL encoded
app.use(express.urlencoded({extended: true}));

// Routes produk
app.use("/products", router);

// Jika endpoint tidak ditemukan
app.use(notFoundMiddleware);

// Menangani Semua Error
app.use(errorHendler)

module.exports = app;

