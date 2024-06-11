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
app.set("trust proxy", 1);
const port = 5000;
const token = "abcxyz";
const SecCookie = "ff0eolkehjdkc3dffds";

app.post("/", (req, res) => {
  res.send("Hello, I am from backend");
});

app.post("/api/set-cookie", (req, res) => {
  console.log("set cookie called");
  const CookieOptions = {
    sameSite: "None",
    path: "/",
    domain: "localhost",
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  };
  res.cookie("token", token, CookieOptions); //First cookie set
  res.cookie("secToken", SecCookie, CookieOptions); //Second cookie set
  res.status(200).json({ message: "Cookie Set" });
});

app.listen(port, () => {
  console.log("APP RUNNING ON PORT ", port);
});
