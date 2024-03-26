const express = require("express");

const router = express.Router();

const customerController = require("../controllers/customerController");

// --------------------- ADD CUTOMER ROUTE ------------------------

router.post("/addCustomer", customerController.addCustomer);

// -----------------

// --------------------- DELETE CUSTOMER ROUTE ------------------------

router.delete("/deleteCustomer", customerController.deleteCustomer);

// -----------------

// --------------------- GET ALL CUSTOMERS ROUTE ------------------------

router.post("/getAllCustomers", customerController.getAllCustomers);

// -----------------

// --------------------- GET ONE CUSTOMER ROUTE ------------------------

router.post("/getOneCustomer", customerController.getOneCustomer);

// -----------------

// --------------------- UPDATE CUSTOMER ROUTE ------------------------

router.put("/updateCustomer", customerController.updateCustomer);

// -----------------

// --------------------- GET CUSTOMER SUMMARY ------------------------

router.post("/getCustomersSummary", customerController.getCustomersSummary);

// -----------------

module.exports = router;
