const mongoose = require("mongoose");

const linking = async () => {
  mongoose.connect(
    "mongodb+srv://DeveloperBook:Hcp2qFTzqucShXGn@developerbook.lsayi.mongodb.net/?retryWrites=true&w=majority&appName=DeveloperBook"
  );
};
module.exports={
    linking

}
// linking()
//   .then(() => {
//     console.log("connected to database");
//   })
//   .catch((err) => {
//     console.log("not connected");
//   });
