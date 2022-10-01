import express from "express";
import { getFarmer } from "../../controllers/farmer/index.js";

const routers = express.Router();

routers.get("/getfarmer/:id", getFarmer);
export default routers;
