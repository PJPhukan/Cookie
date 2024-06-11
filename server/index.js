const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");  

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    preflightContinue: true,
    credentials: true,
  })
);
app.use(cookieParser());

const port = 5000;
const token = "abcxyz";

app.post("/", (req, res) => {
  res.send("Hello, I am from backend");
});

app.post("/set-cookie", (req, res) => {
  console.log("set cookie called");
  res
    .cookie("token", token, {
      sameSite: "None",
      path: "/",
      domain: "localhost",
      httpOnly:true,
      maxAge: 24 * 60 * 60 * 1000, 
    });
    res.status(200).json({ message: "Cookie Set" });
});

app.listen(port, () => {
  console.log("APP RUNNING ON PORT ", port);
});
