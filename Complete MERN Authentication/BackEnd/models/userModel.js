import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: [8, "Password should be at least 8 characters"],
    minLength: [32, "Password cannot have more than 32 characters"],
    required: true,
  },
  //If you use type: Number for the phone field and the phone number starts with 0, the leading 0 will be dropped because JavaScript treats numbers as numeric values, not strings. For example, 0123456789 will be stored as 123456789. To preserve the leading 0, you should use type: String for the phone field.
  phone: {
    type: String,
  },
  accountVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: Number,
  },
  verificationCodeExpiry: {
    type: Date,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpiry: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){
        return next();
    } 
    this.password = await bcrypt.hash(this.password, 10);
    next();
    });

    userSchema.methods.comparePassword = async function (password) {    
        return await bcrypt.compare(password, this.password);
    };

    export const User = mongoose.model("User", userSchema);