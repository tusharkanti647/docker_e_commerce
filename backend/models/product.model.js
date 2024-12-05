import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: "string",
      required: true,
    },
    productDetails: {
      weight: {
        type: "number",
      }
    },
    productDescription: {
      type: "string",
      required: true,
      unique: true,
    },

    productPhoto: {
      type: "string",
      default: "",
    },
    productCategories: {
      type: "string",
      required: true,
    },

    productReview: {
      type: "number",
      default: 0,
    },
    productRating: {
      type: "number",
      required: 0,
    },
    productPrice: {
      type: "number",
      default: 0,
    },
    productDiscount: {
      type: "number",
      required: 0,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
