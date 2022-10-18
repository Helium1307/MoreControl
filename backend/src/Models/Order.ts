import { Product } from "../types/Product";
const mongoose = require("mongoose");

const Order = mongoose.model("Order", {
  products: [],
});
