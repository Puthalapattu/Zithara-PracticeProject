const products = require("../models/productSchema");

// ------------------------- ADD A PRODUCTs -------------------------
const addProduct = async (req, res) => {
  try {
    product = await products.findOne({ name: req.body.name });

    if (product) {
      res
        .status(200)
        .send(
          `Cannot add product, Product already exists, You can update product details`
        );
    } else {
      await products.create(req.body);
      res.status(201).send(`Product "${req.body.name}" is added successfully!`);
    }
  } catch (error) {
    res.status(500).send(`Error '${error}' occured while fetching data`);
  }
};

// ----------------------

// ------------------------- VIEW ALL PRODUCTs -------------------------

const viewProducts = async (req, res) => {
  try {
    allProducts = await products.find();

    if (allProducts) {
      res.status(200).json(allProducts);
    } else {
      res.status(200).send(`No products found!`);
    }
  } catch (error) {
    res
      .status(500)
      .send(`Internal server error: '${error}' occured while fetching data`);
  }
};

// ----------------------

// ------------------------- VIEW PRODUCTs BY ID -------------------------

const viewProductById = async (req, res) => {
  let productId = req.params.productId;

  try {
    let product = await products.findById(productId);

    if (product) {
      res.status(200).send(`Found product: ${product}`);
    } else {
      res.status(404).send(`Nothing is here to see!`);
    }
  } catch (error) {
    res
      .status(500)
      .send(`${productId}: Incorrect product ID, Check it once and try again`);
  }
};

// ----------------------

// ------------------------- UPDATE PRODUCTs BY ID -------------------------

const updateProductById = async (req, res) => {
  let productId = req.params.productId;

  try {
    let updatedProduct = await products.findByIdAndUpdate(productId, req.body, {
      new: true,
    });

    if (updatedProduct) {
      res
        .status(200)
        .send(`Product details are updated successfully!: ${updatedProduct}`);
    } else {
      res.status(404).send(`${productId}: No such product found!`);
    }
  } catch (error) {
    res
      .status(500)
      .send(`${productId}: Incorrect product ID, Check it once and try again`);
  }
};

// ----------------------

module.exports = {
  addProduct,
  viewProducts,
  viewProductById,
  updateProductById,
};
