const { Router } = require("express");
const UserModel = require("../model/user.model");
const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const varify = await UserModel.find({ email });
  if (varify.length > 0) {
    return res.status(300).send({ message: "User already exist" });
  }
  const user = await UserModel(req.body);
  user.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(201).send({
      message: "Congratulations your account has been created",
      success,
    });
  });
});

authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.find({ email, password });
  if (user.length > 0) {
    let { name, email, _id } = user[0];
    return res.send(_id);
  }
  res.send({ message: "Wrong credentials" });
});

authRouter.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  const user = await UserModel.find({ _id });

  res.status(200).send(user);
});
authRouter.patch("/:_id", async (req, res) => {
  const { _id } = req.params;
  const user = await UserModel.findByIdAndUpdate(_id, req.body);
  const updated = await UserModel.findById(_id);

  res.status(200).send(updated);
});

authRouter.get("/:_id/progress", async (req, res) => {
  const { _id } = req.params;
  const user = await UserModel.find({ _id });

  let lec = 0;
  let ass = 0;
  for (let key in user[0]) {
    if (key[0] == "a" && user[0][key]) {
      ass++;
    }
    if (key[0] == "l" && user[0][key]) {
      lec++;
    }
  }

  res.status(200).send({ lec: lec - 1, ass: ass - 1 });
});
module.exports = authRouter;
