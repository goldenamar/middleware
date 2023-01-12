const connect = require("./db");
const express = require("express");
const app = express();
const port = 8000;
const bp = require("body-parser");
const router = require("./router");

connect();

app.use(bp.json());
app.use(router);

app.listen(port, () => {
  console.log("working");
});