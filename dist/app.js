const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running, listening on port ' + (process.env.PORT == undefined ? 3000 : process.env.PORT))
});