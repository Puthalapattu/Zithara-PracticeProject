const customers = require("../models/customerSchema");

// --------------------- ADD A CUSTOMER -----------------------
const addCustomer = async (req, res) => {
  try {
    // console.log(req.body.email);
    const exists = await customers.findOne({ email: req.body.email });

    if (!exists) {
      await customers.create(req.body);

      console.log(`Created Customer ${req.body.name}`);

      res.status(201).send(`${req.body.name} Customer added`);
    } else {
      res.status(200).send(`User already exits`);
    }
  } catch (error) {
    res.send(`Error ${error} occured while creating Customer`);
  }
};

// -----------------

// --------------------- DELETE A CUSTOMER -----------------------

const deleteCustomer = async (req, res) => {
  try {
    const exists = await customers.findOne({ email: req.body.email });
    console.log("Exists: ", exists);

    if (exists) {
      await customers.deleteOne({ email: req.body.email });

      res.status(200).send(`Customer ${exists.name} removed from the database`);
    } else {
      res.status(200).send(`Customer does't exists`);
    }
  } catch (error) {
    res.status(200).send(`Error ${error} Occured while deleting the Customer`);
  }
};

// ------------------

// --------------------- GET ALL CUSTOMERS --------------------------

const getAllCustomers = async (req, res) => {
  try {
    const allCutomers = await customers.find({});
    if (allCutomers) {
      res.status(200).json(allCutomers);
    } else {
      res.status(200).send(`No data found`);
    }
  } catch (error) {
    await res.status(200).send(`Error "${error}" occured while getting data`);
  }
};

// -------------------

// --------------------- GET ONE CUSTOMER  --------------------------

const getOneCustomer = async (req, res) => {
  try {
    const customer = await customers.findOne({ email: req.body.email });

    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(200).send(`Customer Not found`);
    }
  } catch (error) {
    res.status(500).send(`Error ${error} occured during fetching data`);
  }
};

// ------------------

// -------------------- UPDATE CUSTOMER DATAILS ---------------------

const updateCustomer = async (req, res) => {
  try {
    const exists = await customers.findOne({ email: req.body.email });

    console.log("Exists : ", exists);

    if (exists) {
      await customers.updateOne(
        { email: req.body.email },
        {
          name: req.body.name,
          email: req.body.email,
          revenue: req.body.revenue,
          profit: req.body.profit,
          orderCount: req.body.orderCount,
        }
      );
      res
        .status(201)
        .send(`Customer details updated successfully: ${exists.email}`);
    } else {
      await customers.create(req.body);
      res
        .status(200)
        .send(`Customer doesn't exixts, Created the Customer ${req.body.name}`);
    }
  } catch (error) {
    res
      .status(200)
      .send(`Error ${error} occured while Updating the Customer details`);
  }
};

// ------------------

// -------------------- GET CUSTOMER SUMMARY ---------------------

const getCustomersSummary = async (req, res) => {
  try {
    const summary = await customers.aggregate([
      {
        $group: {
          _id: null,
          totalCustomers: { $sum: 1 },
          totalOrders: { $sum: "$orderCount" },
          totalRevenue: { $sum: "$revenue" },
          totalProfit: { $sum: "$profit" },
        },
      },

      {
        $project: {
          _id: 0,
          totalCustomers: 1,
          totalOrders: 1,
          totalProfit: 1,
          totalRevenue: 1,
          avgOrderPerCustomer: { $divide: ["$totalOrders", "$totalCustomers"] },
        },
      },
    ]);

    if (!summary) {
      res.status(404).send(`No data found`);
      return;
    }

    res.status(200).json(summary);
  } catch (error) {
    res.status(200).send(`Error '${error}' occured`);
  }
};

// ------------------

module.exports = {
  addCustomer,
  deleteCustomer,
  getAllCustomers,
  getOneCustomer,
  updateCustomer,
  getCustomersSummary,
};
