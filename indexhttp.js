const http = require("http");
const fs = require("fs");
fs.readFile("./index.html", (err, html) => {
  if (err) {
    console.log("Error Occured");
  } else {
    const server = http.createServer((req, res) => {
      if (req.url == "/") {
        res.write(html);
        res.end();
      }
    });
    server.listen(3000, () => {
      console.log("Server Started at 3000");
    });
  }
});
