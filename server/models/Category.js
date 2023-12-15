const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: Object,
      required: true,
    },
    description: {
      type: Object,
      required: false,
    },
    background_color: {
      type: Object,
      required: false,
    },
    text_color: {
      type: Object,
      required: false,
    },
    slug: {
      type: String,
      required: false,
    },
    parentId: {
      type: String,
      required: false,
    },
    parentName: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    icon1: {
      type: String,
      required: false,
    },
    icon2: {
      type: String,
      required: false,
    },
    icon3: {
      type: String,
      required: false,
    },
    icon4: {
      type: String,
      required: false,
    },

    status: {
      type: String,
      lowercase: true,
      enum: ['show', 'hide'],
      default: 'show',
    },
  },
  {
    timestamps: true,
  }
);

// module.exports = categorySchema;

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
