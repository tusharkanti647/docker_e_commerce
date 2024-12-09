import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      // required: true
    },
    profilePhoto: {
      type: "string",
      default: "",
    },
    userType: {
      type: "boolean",
      default: false,
    },

    userCarts: {
      cartItems: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: {
            type: "number",
            default: 1,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
