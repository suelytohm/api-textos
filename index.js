const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = Express();
const notaRoutes = require("./routes.js");
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());

app.use(Express.json());

app.get("/", (rec, res) => {
  console.log("Braazil");
  res.json({ message: "ok" });
});

app.post("/", (rec, res) => {
  res.json({ message: "ok" });
});

app.use("/nota", notaRoutes);

mongoose
  .connect(
    "mongodb+srv://suelytohm:Z9Toy9huPerhBIZz@cluster0.ft2n9.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://raylsonw:451mPl3P455w0rD@cluster0.yjxejue.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Saalve braziu :D");
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));
