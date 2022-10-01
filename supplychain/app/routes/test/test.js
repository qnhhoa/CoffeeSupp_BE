import express from "express";
import { getTest } from "../../controllers/test.js";

const routers = express.Router();

routers.get("/", getTest);
export default routers;
