import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the authentication API",
  });
});

app.post("/api/auth/register", (req, res) => {
  //step 1 get payload form user
  const { name, email, password } = req.body;

  //step 2 store in db
  // save data to db

  //step 3 generate token
  const token = jwt.sign(
    {
      email,
      name,
      // _id
    },
    //jwt secret
    "05536170cd7918fa8190d04b7eaf748a62817b20f0d5271d03607462bd55f6aac8c92dcc5e695e0e70b059ecd763773f",
  );

  //step 4 send response to user
  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: {
        email,
        name,
      },
      token,
    },
  });
});

export default app;
