const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://hung:vuquochung2204@cluster0.7lihq3v.mongodb.net/netflix?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  });

app.use("/api/user", userRoutes);

// app.listen(5000);
app.listen(process.env.PORT || 5000, console.log("server started"));
