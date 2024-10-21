const mongoose = require("mongoose");

const linking = async () => {
  mongoose.connect(
    "mongodb+srv://DeveloperBook:Hcp2qFTzqucShXGn@developerbook.lsayi.mongodb.net/?retryWrites=true&w=majority&appName=DeveloperBook"
  );
};
module.exports={
    linking

}
