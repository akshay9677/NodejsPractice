const express = require("express");
const app = express();

app.use(middle);

app.get("/", middle, (req, res) => {
  console.log("Start");
  res.end();
});

function middle(req, res, next) {
  console.log("Middle Ware");
  next();
}

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
