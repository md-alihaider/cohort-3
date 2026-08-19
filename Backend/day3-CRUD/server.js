const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;
let users = [];

// create user
app.post("/create", (req, res) => {
  let userId = users.length + 1;
  const newUser = {
    user_Id: userId,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);
  res.send(newUser);
});

//delete user
app.delete("/delete/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.user_Id === id);
  if (userIndex === -1) {
    return res.status(404).send({
      message: "User not found",
    });
  }
  const deletedUser = users.splice(userIndex, 1);
  res.status(200).send({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
});

//update user
app.put("/update/:id", (req, res) => {
  let id = Number(req.params.id);
  let {name, age} = req.body;
  let updatedUser = users.map((val) =>
    val.user_Id === id ? { ...val, name, age } : val,
  );

  res.send(updatedUser);
});

// get - read user
app.get("/", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
