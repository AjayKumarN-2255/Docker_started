const express = require("express");
const { connection } = require("./database/connection");

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connection();

    app.get("/", (req, res) => {
      res.send("Hello from Express Node app 🚀");
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();

