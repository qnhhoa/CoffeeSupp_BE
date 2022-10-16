import express from "express";
import { getFarmer } from "../../controllers/farmer/index.js";
import { getHavest } from "../../controllers/farmer/index.js";
import { getPrepare } from "../../controllers/farmer/index.js";
import { getPlant } from "../../controllers/farmer/index.js";

const routers = express.Router();

routers.get("/getfarmer/:id", getFarmer);
routers.get("/getplant/:id", getPlant);
routers.get("/gethavest/:id", getHavest);
routers.get("/getprepare/:id", getPrepare);
export default routers;
