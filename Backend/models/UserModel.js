import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  auth0Id: String,
  name: String,
  email: String,
  picture: String,

  age: Number,
  phone: String,
  location: String,

  profileCompleted: { type: Boolean, default: false }
});

export default mongoose.model("User", UserSchema);