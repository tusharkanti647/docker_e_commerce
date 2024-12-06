import express from "express";
import {
  addProduct,
  imgUload,
  productGet,
  getOneProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productControllers.js";
import {
  isAuthenticated,
  isAuthenticatedAdmin,
} from "../middlewares/authenticated.js";
// import isAuthenticated from '../middlewares/authenticated';

const router = express.Router();
// const router = express.Router();

router
  .route("/addProduct")
  .post(isAuthenticated, isAuthenticatedAdmin, addProduct);
router
  .route("/imgUload")
  .post(isAuthenticated, isAuthenticatedAdmin, isAuthenticatedAdmin, imgUload);
router
  .route("/deleteProduct")
  .get(isAuthenticated, isAuthenticatedAdmin, deleteProduct);
router
  .route("/updateProduct")
  .get(isAuthenticated, isAuthenticatedAdmin, updateProduct);
router.route("/productGet").get(productGet);
router.route("/getOneProduct").get(getOneProduct);

export default router;
