const express = require("express");
const { linking } = require("./config/database");
const { admin } = require("./middleware/adminAuth");
const {User} = require("./models/user");
const app = express();

app.use(express.json()) //middleware to convert data to json 

app.post("/signup", async (req, res) => {
  // const userObj = new User({
  //   firstName: "roshini",
  //   lastName: "kumari",
  //   age: 23,
  //   gender: "female",
  //   emailID: "roshini@gmail.com",
  // });
  const userObj= new User(req.body)
try{
  await userObj.save(); //.save()returns a promise so we will use async await
  res.send("user added ")
}
catch(err){
  console.log("error happened ")
}
});

app.get("/user",async(req,res)=>{
  const email = req.body.emailID
  try{
   const userinfo= await User.find({})
    res.send(userinfo)
  }
  catch(err){
   console.log("an error occured")
  }
})



app.delete("/user",async(req,res)=>{
  const id = req.body.userID
  try{
   const userinfo= await User.findOneAndDelete({id})
    res.send("succesfuly deleted")
  }
  catch(err){
   console.log("an error occured")
  }
})





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
