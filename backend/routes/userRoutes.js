// import express from 'express';
import express from "express";
import {
  login,
  logOut,
  register,
  authCheck,
  testGet,
} from "../controllers/userControllers.js";
import isAuthenticated from "../middlewares/authenticated.js";
// import isAuthenticated from '../middlewares/authenticated';

const router = express.Router();
// const router = express.Router();

router.route("/signUp").post(register);
router.route("/signIn").post(login);
router.route("/authCheck").get(isAuthenticated, authCheck);
router.route("/signOut").get(logOut); //testGet
router.route("/testGet").get(testGet);

export default router;
