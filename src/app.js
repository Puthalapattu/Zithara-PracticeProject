const express = require("express");

const server = express();

const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");

const ConnectToDB = require("./dataBase");

ConnectToDB();

server.use(express.json());

server.use("/api", customerRoutes);
server.use("/api", productRoutes);

const port = 3000;

server.get("/", (req, res) => {
  res.send("Customer data server");
});

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
