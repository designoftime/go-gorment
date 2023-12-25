const mongoose = require("mongoose");

const ThemeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    theme: {},
  },
  {
    timestamps: true,
  }
);

// module.exports = ThemeSchema;

const Theme = mongoose.model("Theme", ThemeSchema);
module.exports = Theme;
