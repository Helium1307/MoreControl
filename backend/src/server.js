const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/order", (req, res, next) => {
  res.send({
    id: 1,
    order: {
      main: "Salve",
      description: "sem cebola",
    },
  });
});

mongoose
  .connect(process.env.MONGO_CONNECT_CODE)
  .then(() => {
    console.log("Conectamos com o Mongo");
    app.listen(3001, () => console.log("rodando"));
  })
  .catch((err) => {
    console.error(err);
  });
