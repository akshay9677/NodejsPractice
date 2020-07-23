import express from "express";

import text from "./index3";

const app = express();
var name = "Akshay";

app.get("/", (req, res) => {
  res.send(`<h1>${text(name)}</h1>`);
});

app.listen(3000, () => {
  console.log("Server Started at 3000");
});
