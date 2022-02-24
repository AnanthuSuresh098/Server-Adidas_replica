const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false },
    email: { type: String, required: false },
    password:{ type: String, required: false },
    cartItems:[{ type: mongoose.Schema.Types.ObjectId, ref: "product", required: false },],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 8);
  return next();
});

const Users = mongoose.model("user", userSchema);
module.exports = Users
