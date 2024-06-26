const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/AuthRoute");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/ErrorHandler");

//db connection function

dbConnect();

// app.use("/", (req, res) => {
//   res.send("hello from server side");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
