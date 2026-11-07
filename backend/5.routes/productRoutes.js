// Bertanggung jawab untuk menentukan endpoint
const express = require ("express");
const router = express.Router();

const productController = require ("../4.controllers/productController");
const validateCreateProduct= require ("../7.validation/productValidation")


router.get("/", productController.getProduct);
router.get("/:id",productController.getProductById);
router.post("/", validateCreateProduct, productController.createProduct);


module.exports = router;
