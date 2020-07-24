import express from "express";

import greet, { func, last } from "./util";

const app = express();
var name = "Akshay";
var lastName = "Kannan";

app.get("/", (req, res) => {
  res.send(`<h1>${greet()}${func(name)}${last(lastName)}</h1>
  <p>sample text</p>`);
});
app.listen(3001, () => {
  console.log("Server Started at 3001");
});
