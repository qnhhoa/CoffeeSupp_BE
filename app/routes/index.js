import express from "express";
import test from "./test/test.js";
import farmer from "./farmer/index.js";
import user from "./user/index.js"
import processing from "./processing/index.js"

const routers = express.Router();

routers.use("/test", test);
routers.use("/farmer", farmer);
routers.use("/user",user)
routers.use("/processing",processing)

export default routers;
