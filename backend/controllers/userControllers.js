import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
// import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { Product } from "../models/product.model.js";

//user signUp ---------------------------------------------------
export const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    console.log(name, username, email, password);
    if (!name || !username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Something went missing.", success: false });
    }
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }

    const hashPassWord = await bcrypt.hash(password, 10);

    // await User.create({ name, email, password: hashPassWord })

    const user = new User({ name, username, email, password: hashPassWord });

    const response = await user.save();
    let userId = response._id;
    const tokenData = {
      userId,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "10d",
    });

    return res
      .status(200)
      .cookie("JWTToken", token, {
        maxAge: 10 * 24 * 3600 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Account created successfully",
        success: true,
        user,
      });
    // return res.status(200).json({ message: 'Account created successfully', success: true });
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

/////admin sign up --------------------------------------------------------------
export const adminRegister = async (req, res) => {
  try {
    const { name, username, email, password, userType } = req.body;
    console.log(name, username, email, password);
    if (!name || !username || !email || !password || !userType) {
      return res
        .status(400)
        .json({ message: "Something went missing.", success: false });
    }
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }

    const hashPassWord = await bcrypt.hash(password, 10);

    // await User.create({ name, email, password: hashPassWord })

    const user = new User({
      name,
      username,
      email,
      password: hashPassWord,
      userType,
    });

    const response = await user.save();
    let userId = response._id;
    const tokenData = {
      userId,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "10d",
    });

    return res
      .status(200)
      .cookie("JWTToken", token, {
        maxAge: 10 * 24 * 3600 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Account created successfully",
        success: true,
        user,
      });
    // return res.status(200).json({ message: 'Account created successfully', success: true });
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

//login ---------------------------------------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body, email, password);
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Something went missing.", success: false });
    }
    let existUser = await User.findOne({ email: email });
    if (!existUser) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password.", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, existUser.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password.", success: false });
    }

    const tokenData = {
      userId: existUser._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "10d",
    });

    console.log("JWTToken", token);
    return res
      .status(200)
      .cookie("JWTToken", token, {
        maxAge: 10 * 24 * 3600 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${existUser.name}`,
        success: true,
        user: existUser,
      });
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

// Authentication Check --------------------------------------------------------
export const authCheck = (req, res) => {
  // const userId = req.id;
  const userId = req.id;
  console.log(userId);
  try {
    if (userId)
      return res
        .status(200)
        .json({ authenticated: true, user: userId, success: true });
    else
      return res.status(401).json({
        authenticated: false,
        message: "Invalid token",
        success: false,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({ authenticated: false });
  }
};

// get the user  --------------------------------------------------------
export const getUser = async (req, res) => {
  // const userId = req.id;
  const userId = req.id;
  console.log(userId);
  try {
    if (userId) {
      const user = await User.findById(userId);
      return res
        .status(200)
        .json({ authenticated: true, user: user, success: true });
    } else
      return res.status(401).json({
        authenticated: false,
        message: "Invalid token",
        success: false,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({ authenticated: false });
  }
};
// get the user cart --------------------------------------------------------
export const getUserCart = async (req, res) => {
  // const userId = req.id;
  const userId = req.id;
  console.log(userId);
  try {
    if (userId) {
      const user = await User.findById(userId);
      let curtProductList = [];
      for (let i = 0; i < user.userCarts.cartItems.length; i++) {
        let product = await Product.findById(
          user.userCarts.cartItems[i].productId
        );
        curtProductList.push(product);
      }

      return res.status(200).json({
        authenticated: true,
        userCarts: user.userCarts,
        curtProductList: curtProductList,
        success: true,
      });
    } else
      return res.status(401).json({
        authenticated: false,
        message: "Invalid token",
        success: false,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({ authenticated: false });
  }
};

// add product to the user cart --------------------------------------------------------
export const addToCart = async (req, res) => {
  // const userId = req.id;
  const userId = req.id;
  console.log(userId);
  try {
    if (userId) {
      const productId = req.query.productId;
      const user = await User.findById(userId);
      // Validate productId format
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res
          .status(400)
          .json({ error: "Invalid product ID.", success: false });
      }

      // Check if the product already exists in the cart
      const existingCartItem = user.userCarts.cartItems.find(
        (item) => item.productId.toString() === productId
      );

      if (existingCartItem) {
        // Increment the quantity if the product already exists in the cart
        existingCartItem.quantity += 1;
      } else {
        // Add the new product to the cart with a default quantity of 1
        user.userCarts.cartItems.push({ productId, quantity: 1 });
      }
      await user.save();
      res.status(200).json({
        message: "Product added to cart successfully.",
        cart: user.userCarts,
        success: true,
      });
    } else
      return res.status(401).json({
        authenticated: false,
        message: "Invalid token",
        success: false,
      });
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({
        authenticated: false,
        error: "Something went wrong.",
        success: false,
      });
  }
};

// log out application Check --------------------------------------------------------
export const logOut = async (req, res) => {
  try {
    return res.status(200).cookie("JWTToken", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};
// test Check --------------------------------------------------------
export const testGet = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (e) {
    console.log("ERROR", e);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};
