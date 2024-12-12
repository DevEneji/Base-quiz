const express = require("express");
const cors = require("cors");
const questionsRoutes = require("./routes/questions"); // Import the questions route

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", questionsRoutes);

module.exports = app;
