// import express from 'express';
import express from "express";
import {
  login,
  logOut,
  register,
  adminRegister,
  authCheck,
  testGet,
  getUser,
  getUserCart,
  addToCart,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../middlewares/authenticated.js";
// import isAuthenticated from '../middlewares/authenticated';

const router = express.Router();
// const router = express.Router();

router.route("/signUp").post(register);
router.route("/adminRegister").post(adminRegister);
router.route("/signIn").post(login);
router.route("/authCheck").get(isAuthenticated, authCheck);
router.route("/getUser").get(isAuthenticated, getUser);
router.route("/getUserCart").get(isAuthenticated, getUserCart);
router.route("/getUserCart").get(isAuthenticated, addToCart);
router.route("/signOut").get(logOut); //
router.route("/testGet").get(testGet);

export default router;
