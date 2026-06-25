import express from "express";

import {addUser,addCourse,addEmployee} from "../controllers/userController.js";

const routes = express.Router();

routes.post("/register", addUser);
routes.post("/course", addCourse);
routes.post("/employee", addEmployee);

export default routes;

// POST http://localhost:5000/api/users/register
// POST http://localhost:5000/api/users/course
// POST http://localhost:5000/api/users/employee
