import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  console.log("hjhdsdh");
  try {
    const token = req.cookies.JWTToken;
    if (!token) {
      return res
        .status(401)
        .json({ message: "User not Authenticated", success: false });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token", success: false });
    }
    console.log("user id", decode.userId);

    req.id = decode.userId;
    next();
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

export const isAuthenticatedAdmin = async (req, res, next) => {
  try {
    console.log("jjjjj", req.id);
    const userId = req.id;
    const user = await User.findById(userId);
    let isAdmin = user.userType;
    console.log("jjjjj isAdmin", isAdmin);
    if (!isAdmin) {
      return res.status(401).json({ message: "Invalid user", success: false });
    }

    next();
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};
