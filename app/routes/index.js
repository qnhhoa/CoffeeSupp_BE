import express from "express";
const routers = express.Router();
import test from "./test/test.js";
import farmer from "./farmer/index.js";

routers.use("/test", test);
routers.use("/farmer", farmer);
// routers.use("/test", test);

export default routers;
