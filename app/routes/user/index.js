import express from "express";
import { login, getAllUser } from "../../controllers/user/index.js";

const routers = express.Router();

routers.post("/login", login);
routers.get("/getAllUser", getAllUser);

export default routers;