const express = require("express");
require("dotenv").config();
const connectToMongo = require("./config/database");
const router = require("./routes/transactionsRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
let port = process.env.PORT;

app.get("/", (req, res) => {
  res.json("Hello World !");
});

app.use("/api", router);

app.listen(port, async () => {
  try {
    await connectToMongo;
    console.log("Connect To MongoDb");
  } catch (error) {
    console.log(error);
  }
  console.log(`Listign on port ${port}`);
});
