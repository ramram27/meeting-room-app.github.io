const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./routes/routeruser");

mongoose.connect("mongodb://localhost/dataApi");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server start PORT ${PORT}`);
});
