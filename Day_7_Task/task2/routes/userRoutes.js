import express from "express";
import { addUser } from "../controllers/userController.js";
import { registerValidation } from "../middleware/validation.js";

const routes = express.Router();

routes.post( "/register", registerValidation,addUser
);
export default routes;