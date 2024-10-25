const ValidatesignUpdata = (req) => {
  const { emailID, password, firstName, lastName } = req.body; //data validation
  if (!emailID.includes("@")) {
    throw new Error("invalid password");
  }
  if (!firstName || !lastName) {
    throw new Error("enter your name");
  }
};

module.exports={
    ValidatesignUpdata
}