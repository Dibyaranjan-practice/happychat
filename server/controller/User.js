const User = require("./../models/User");

exports.postCreateUser = async (req, res, next) => {
  console.log("working");
  console.log(req.body);
  const user = await User.findByPk(req.body.phone);
  if (user) {
    return res.status(400).json("Phone number already registered");
  }
  User.create({
    phone: req.body.phone,
    password: req.body.password,
  })
    .then(() => {
      res.status(200).json("User Creation Success");
    })
    .catch((error) => {
      res.status(400).json("User creation Failed");
    });
};
exports.getCreateUser = async (req, res, next) => {
  console.log("working on get");
  res.send("hei");
};
exports.postLoginUser = (req, res, next) => {
  res.send("Post LoginPage");
};
