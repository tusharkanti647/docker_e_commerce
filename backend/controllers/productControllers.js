import multer from "multer";
import path from "path";
import { Product } from "../models/product.model.js";



//product Post path
//-------------------------------------------------------------------------------
export const addProduct = async (req, res) => {
  try {
    if (req.id) {
      //   productPhoto,
      const {
        productName,
        productDetails,
        productDescription,

        productCategories,

        productReview,
        productRating,
        productPrice,
        productDiscount,
      } = req.body;

      if (
        !productName ||
        !productDetails ||
        !productDescription ||
        !productCategories ||
        !productReview ||
        !productRating ||
        !productPrice ||
        !productDiscount
      ) {
        return res
          .status(400)
          .json({ message: "Something went missing.", success: false });
      }

      const product = new Product({
        productName,
        productDetails,
        productDescription,

        productCategories,

        productReview,
        productRating,
        productPrice,
        productDiscount,
      });
      const response = await product.save();

      return res.status(200).json({
        message: "Product add successfully",
        success: true,
        response,
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

//Product photo upload path
//-----------------------------------------------------------------------------
// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Upload folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});




export const imgUload = async (req, res) => {
  try {
    //req.query.quizId
    let _id = req.query.productId;
    console.log(_id);
    //const car = await carModel.findOne({_id});
    //console.log(car);
    const data = await Product.updateOne(
      { _id: _id },
      {
        $set: {
          productPhoto: `http://localhost:8000/product/${req.file.filename}`,
        },
      }
    );
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

//Product get path
//-----------------------------------------------------------------------------
export const productGet = async (req, res) => {
  try {
    // if (req.id) {
    const data = await Product.find();

    if(!data){
      return res
            .status(500)
            .json({ message: "Product dos not exist.", success: false });
          }


    return res.status(200).json({
      message: "Product add successfully",
      success: true,
      data,
    });


    // } else {
    //   res.status(404).send("please login first");
    // }
  } catch (err) {
    console.log("ERROR", err);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

//Product one get path
//----------------------------------------------------------------------------
export const getOneProduct = async (req, res) => {
  try {
    // if (req.id) {
    const data = await Product.findById(req.query.productId);
    return res.status(200).json({
      message: "Product get successfully",
      success: true,
      data,
    });
    // } else {
    //   res.status(404).send("please login first");
    // }
  } catch (err) {
    console.log("ERROR", err);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

//Product edit information path
//----------------------------------------------------------------------------
export const updateProduct = async (req, res) => {
  try {
    if (req.id) {
      let _id = req.query.productId;
      const {
        productName,
        productDetails,
        productDescription,

        productCategories,

        productReview,
        productRating,
        productPrice,
        productDiscount,
      } = req.body;

      const data = await Product.updateOne(
        { _id: _id },
        {
          $set: {
            productName,
            productDetails,
            productDescription,

            productCategories,

            productReview,
            productRating,
            productPrice,
            productDiscount,
          },
        }
      );
      return res.status(200).json({
        message: "Product update successfully",
        success: true,
        data,
      });
    } else {
      res.status(404).send("please login first");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};

// delete one Product
//----------------------------------------------------------------------------
export const deleteProduct = async (req, res) => {
  try {
    if (req.id) {
      let _id = req.query.productId;

      const data = await Product.deleteOne({ _id });
      console.log(data);
      return res.status(200).json({
        message: "Product deleted successfully",
        success: true,
        data,
      });
    } else {
      res.status(404).send("please login first");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error.", success: false });
  }
};
