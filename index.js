const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//const cors = require("cors");

dotenv.config();


mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
);


const petRoutes = require("./routes/pet");


 app.use(express.json());
// app.use(cors());


app.use("/api/pets", petRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
