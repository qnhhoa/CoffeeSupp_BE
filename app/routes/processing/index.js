import express from "express";
import { getAllIngress } from "../../controllers/processing/index.js";

const routers = express.Router();

routers.get("/getAllIngress", getAllIngress);

export default routers;