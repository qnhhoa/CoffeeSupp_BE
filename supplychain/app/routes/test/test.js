import express from "express";
import { getTest } from "../../controllers/test.js";

const routers = express.Router();

routers.get("/gettest/:id", getTest);
export default routers;
