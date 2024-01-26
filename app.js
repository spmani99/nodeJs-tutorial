const http = require("http");

const route = require("./routes");

const server = http.createServer(route.handler);
console.log(route.soomeText);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
