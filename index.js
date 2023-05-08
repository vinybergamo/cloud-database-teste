const express = require("express");

app = express();

app.get("/", (req, res) => {
  console.log(process.env.DATABASE_URL);
  try {
    return res.status(200).json({ database: process.env.DATABASE_URL });
  } catch (e) {
    return res.status(500).json({ error: "Database URL not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
