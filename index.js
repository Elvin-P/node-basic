const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end;
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end;
    });
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
