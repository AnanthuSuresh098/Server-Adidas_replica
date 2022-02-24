const express = require("express");

const productController = require("./controllers/productController");
const authController = require("./controllers/authController");

const app = express();

app.use(express.json());
app.use("/products", productController);
app.use("/auth", authController);

module.exports = app;
