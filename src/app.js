const express = require("express");
const app = express();

app.listen(9000, () => {
  console.log("listening");
});

app.use("/home", (req, res) => {
  res.send("this is the home page ");
});

app.use((req, res) => {
  res.send("heelo from the other side");
});
