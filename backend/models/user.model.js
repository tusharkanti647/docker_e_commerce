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
      completedQuiz: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        },
      ],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
