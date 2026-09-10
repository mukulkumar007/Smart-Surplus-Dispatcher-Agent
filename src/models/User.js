const mongoose = require("mongoose");//require mongose

const userSchema  = new mongooseSchema(
    {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["DONOR","NGO","VOLUNTEER"],
      default: "DONOR",
    },
  },
  {
    timestamps: true,
  }
)