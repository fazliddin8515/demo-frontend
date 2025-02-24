const path = require("node:path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Frontend is running on http://localhost:${PORT}`);
});
