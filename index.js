require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./src/router/todoRouter");

const app = express();

// Setup middlewares
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Set routers
app.use("/todo", todoRouter);

// Try connect to mongodb server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`✅ Connected to mongodb server successfully`);

    // Run node web server
    app.listen(
      process.env.PORT,
      console.log(
        `✅ Server listening for requests on ${process.env.PORT} port`
      )
    );
  })
  .catch((err) => {
    console.error("❌ Couldn't connect to mongodb server\n", err);
  });
