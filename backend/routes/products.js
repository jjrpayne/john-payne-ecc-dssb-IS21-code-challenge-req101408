const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/products');
const val = require("../tools/validate");

// get all products
router.get('/api/products',
    ProductController.getAllProducts
);

// add new product
router.post('/api/new_product',
    val.validateNewProduct(),
    ProductController.addNewProduct
);

// edit product
router.put('/api/edit_product/:id',
    val.validateEditProduct(),
    ProductController.editProduct
)

module.exports = router;