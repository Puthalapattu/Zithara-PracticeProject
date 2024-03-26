const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

// ----------------------- ADD A PRODUCT --------------------------

router.post("/addProduct", productController.addProduct);

// --------------------

// ----------------------- VIEW ALL PRODUCTS --------------------------

router.get("/getAllProducts", productController.viewProducts);

// --------------------

// ----------------------- VIEW A SINGLE PRODUCT BY ID --------------------------

router.get("/viewProductById/:productId", productController.viewProductById);

// --------------------

// ----------------------- GET PRODUCT WITH ID --------------------------

router.put(
  "/updateProductById/:productId",
  productController.updateProductById
);

// --------------------

module.exports = router;
