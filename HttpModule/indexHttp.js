const http = require("http");
const fs = require("fs");
fs.readFile("./indexHttp.html", (err, html) => {
  if (err) {
    console.log("Error Occured");
  } else {
    const server = http.createServer((req, res) => {
      if (req.url == "/") {
        res.write(html);
        res.end();
      }
      if (req.url == "/endPoint") {
        res.write("<h1>Hello</h1>");
        res.end();
      }
    });
    server.listen(3003, () => {
      console.log("Server Started at 3003");
    });
  }
});
