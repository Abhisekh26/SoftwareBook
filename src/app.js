const express = require("express");
const{linking }= require("./config/database");
const { admin } = require("./middleware/adminAuth");
const app = express();
linking()
  .then(() => {
    console.log("connected to database");
    app.listen(9000, () => {
      console.log("listening");
    });
  })
  .catch((err) => {
    console.log("not connected");
  });





// app.use("/admin", admin, (req, res) => {
//   res.send("admin auth not granted suck it ");
// });

// app.use((req, res) => {
//   res.send("heelo from the other side");
// });
