import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
//middleware
import bodyParser from "body-parser";
// import fs from "fs";

import { createServer } from "http";

import path, { dirname } from "path";

import routers from "./routes/index.js";

dotenv.config();
var app = express();

app.use(cors({
  origin: '*'
}));
var accessLogStream = fs.createWriteStream(path.join("access.log"), {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream }));
app.use(bodyParser.json()); //cho phep json
app.use(bodyParser.urlencoded({ extended: true })); //Cho phep form
// app.set("views", views);
app.set("view engine", "ejs");

//session
app.set("trust proxy", 1); // trust first proxy
// app.use(
//   session({
//     secret: config.get("secret_key"),
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );

//static folder
app.use("/static", express.static("../public"));

app.use(routers);

export const server = createServer(app);


server.listen(4000, () => {
  // destructuring
  const { address, port } = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
