const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Im middlewere");
  next();
});

app.use((req, res, next) => {
  console.log("Im middle middlewere");
  res.send("<h1>Hii Sandali</h1>");
});

app.listen(3000);

// const PORT = 3000;
// const server = http.createServer(app);

// server.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });
