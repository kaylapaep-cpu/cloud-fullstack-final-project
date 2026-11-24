
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Cloud Full-Stack Backend is Running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API is healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
