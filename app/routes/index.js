import express from "express";
const routers = express.Router();
import test from "./test/test.js"

routers.use("/test", test);
// routers.use("/test", test);



export default routers;
