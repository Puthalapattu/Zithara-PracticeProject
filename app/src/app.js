const express = require("express");

const server = express();

const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const eventRouter = require("./routes/eventRoutes");

const ConnectToDB = require("./dataBase");

ConnectToDB();

server.use(express.json());

server.use("/api", customerRoutes);
server.use("/api", productRoutes);
server.use("/api", eventRouter);

const port = 3000;

server.get("/", (req, res) => {
  res.send("Customer data server");
});

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
