const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/products');

// get all products
router.get('/api/products',
    ProductController.getAllProducts
);

// add new product
router.post('/api/new_product',
    ProductController.addNewProduct
);

// edit product
router.put('/api/edit_product/:id',
    ProductController.editProduct
)

module.exports = router;