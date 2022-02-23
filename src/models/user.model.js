const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    cartItems:[{ type: mongoose.Schema.Types.ObjectId, ref: "product", required: false },],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
