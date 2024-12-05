import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: "string",
      required: true,
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
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
