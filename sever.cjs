const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file for all other requests (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
