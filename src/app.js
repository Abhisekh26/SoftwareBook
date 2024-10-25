const express = require("express");
const { linking } = require("./config/database");
const { admin } = require("./middleware/adminAuth");
const { User } = require("./models/user");
const bcrypt = require("bcrypt"); //used to encrypt password
const { ValidatesignUpdata } = require("./utilis/Validation");
const app = express();

app.use(express.json()); //middleware to convert data to json

app.post("/signup", async (req, res) => {
  try {
    ValidatesignUpdata(req);
    const { password, firstName, lastName, emailID } = req.body;
    //Encrypt the password using bcrypt libraray
    const passwordHash = await bcrypt.hash(password, 10); //inbuilt function to decrypt pssword and return a promise
    //console.log(passwordHash)
    const userObj = new User({
      //create a new instance of user model
      firstName,
      lastName,
      password: passwordHash,
      emailID,
    });
    await userObj.save(); //.save()returns a promise so we will use async await
    res.send("user added ");
  } catch (err) {
    res.status(400).send("Error happend" + err.message);
    console.log("error happened ");
  }
});

app.post("/login",async(req,res)=>{
  try{
   const {emailID,password}=req.body
  const user_exists= await User.findOne({emailID:emailID})
  if(user_exists){
    const pass_check= await bcrypt.compare(password,user_exists.password)
   res.send("Login successful")
  }
  else{
    res.status(400).send("Enter valid credentials")
  }
  }
  catch(Err){

  }
})

app.get("/user", async (req, res) => {
  const email = req.body.emailID;
  try {
    const userinfo = await User.find({});
    res.send(userinfo);
  } catch (err) {
    console.log("an error occured");
  }
});

app.delete("/user", async (req, res) => {
  const id = req.body.userID;
  try {
    const userinfo = await User.findOneAndDelete({ id });
    res.send("succesfuly deleted");
  } catch (err) {
    console.log("an error occured");
  }
});

app.patch("/user", async (req, res) => {
  const id = req.body.userID;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(id, data, {
      runvalidators: true,
    });
    res.send("successfully updated");
  } catch (err) {}
});

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
