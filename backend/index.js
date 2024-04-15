const express = require("express");

const main = require("./routes/main.js");
const client = require("./routes/client.js");

const app = express();
const PORT = 3030;

app.use("/", main);

app.listen(PORT, () => {
  console.log(`server is working on port - ${PORT}`);
});
