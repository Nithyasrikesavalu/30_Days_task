import express from "express";
import { getParams, getQuery, getHeaders, getBody } from "../controllers/userController.js";
const routes = express.Router();

routes.get("/params/:id", getParams);
routes.get("/query", getQuery);
routes.get("/headers", getHeaders);
routes.post("/body", getBody);

export default routes;