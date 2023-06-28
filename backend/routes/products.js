/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         -id
 *         -productName
 *         -productOwnerName
 *         -Developers
 *         -scrumMasterName
 *         -startDate
 *         -methodology
 *         -location
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         productName:
 *           type: string
 *           description: The name of the product
 *         productOwnerName:
 *           type: string
 *           description: The name of the product owner
 *         Developers:
 *           type: array of strings
 *           description: A list of the developers who have worked on the product (minimum of 1, maximum of 5)
 *         scrumMasterName:
 *           type: string
 *           description: The name of the product scrum master
 *         startDate:
 *           type: string
 *           format: date
 *           description: The start date of product development (format YYYY/MM/DD)
 *         methodology:
 *           type: string
 *           description: The methodology of development (must be Agile or Waterfall)
 *         location:
 *           type: string
 *           description: The URL of the git repository where the product is located
 *           
 *       example:
 *         id: 1
 *         productName: "Respect Economy"
 *         productOwnerName: "Nick Mullen"
 *         Developers: ["Stavros Halkias", "Adam Friedland"]
 *         scrumMasterName: "Andre Steakhouse"
 *         startDate: "2021/10/25"
 *         methodology: "Waterfall"
 *         location: "https://github.com/bcgov/BC-Policy-Framework-For-GitHub"
 */

const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/products');
const val = require("../tools/validate");

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: An error occured while retrieving products
 *
 */

// get all products
router.get('/api/products',
    ProductController.getAllProducts
);

/**
* @swagger
* /api/new_product:
*   post:
*     summary: Create a new product
*     tags: [Products]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Product'
*     responses:
*       200:
*         description: The created product.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Product'
*       500:
*         description: An error occured while creating the new product
*/

// add new product
router.post('/api/new_product',
    val.validateNewProduct(),
    ProductController.addNewProduct
);

/**
* @swagger
* /api/edit_product/{id}:
*   put:
*     summary: Edit an existing product by its id
*     tags: [Products]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*           required: true
*         description: The product id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Product'
*     responses:
*       200:
*         description: The created product.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Product'
*       404:
*         description: Could not find a product with the specified id
*       500:
*         description: An error occured while updating the product
*/

// edit product
router.put('/api/edit_product/:id',
    val.validateEditProduct(),
    ProductController.editProduct
)

module.exports = router;