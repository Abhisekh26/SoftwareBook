const admin = (req, res, next) => {
  const key = "abc";

  if (key) {
    res.send("admin auth granted");
  } else {
    next();
  }
};

module.exports = {
  admin,
};
