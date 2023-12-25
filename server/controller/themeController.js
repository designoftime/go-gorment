const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

// const { mongo_connection } = require('../config/db'); // CCDev
const Theme = require("../models/Theme");

const addTheme = async (req, res) => {
  try {
    const newTheme = new Theme(req.body);
    await newTheme.save();
    res.send({ message: "Theme Added Successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getAllThemes = async (req, res) => {
  try {
    const storeCustomizationTheme = await Theme.find({
      name: "themeCustomization",
    });
    res.send(storeCustomizationTheme);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// const getShowingThemes = async (req, res) => {
//   try {
//     const Themes = await Theme.find({
//       status: "show",
//     }).sort({ _id: -1 });
//     res.send(Themes);
//   } catch (err) {
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// };

const getThemeById = async (req, res) => {
  try {
    const theme = await Theme.findById(req.params.id);
    res.send(theme);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateTheme = async (req, res) => {
  try {
    const theme = req.body.theme;
    const id = req.params.id;
    const themeCustomization = await Theme.findOneAndUpdate(
      {
        _id: id,
        name: req.body.name
      },
      {
        $set: {
          "theme.section_one.section_status": theme.section_one.section_status,
          "theme.section_one.first_img": theme.section_one.first_img,
          "theme.section_one.second_img": theme.section_one.second_img,
          "theme.section_one.third_img": theme.section_one.third_img,
          "theme.section_one.four_img": theme.section_one.four_img,
          "theme.section_one.first_title": theme.section_one.first_title,
          "theme.section_one.first_editor": theme.section_one.first_editor,
          "theme.section_one.second_title": theme.section_one.second_title,
          "theme.section_one.second_editor": theme.section_one.second_editor,
          "theme.section_one.third_title": theme.section_one.third_title,
          "theme.section_one.third_editor": theme.section_one.third_editor,

          "theme.section_two.section_status": theme.section_two.section_status,
          "theme.section_two.first_title": theme.section_two.first_title,
          "theme.section_two.first_img": theme.section_two.first_img,
          "theme.section_two.second_title": theme.section_two.second_title,
          "theme.section_two.second_img": theme.section_two.second_img,
          "theme.section_two.third_title": theme.section_two.third_title,
          "theme.section_two.third_img": theme.section_two.third_img,
          "theme.section_two.four_title": theme.section_two.four_title,
          "theme.section_two.four_img": theme.section_two.four_img,
          "theme.section_two.background_color":
            theme.section_two.background_color,
          "theme.section_two.text_color": theme.section_two.text_color,

          "theme.section_three.section_status":
            theme.section_three.section_status,
          "theme.section_three.top_header": theme.section_three.top_header,
          "theme.section_three.first_img": theme.section_three.first_img,
          "theme.section_three.first_title": theme.section_three.first_title,
          "theme.section_three.first_description":
            theme.section_three.first_description,
          "theme.section_three.second_title": theme.section_three.second_title,
          "theme.section_three.second_description":
            theme.section_three.second_description,
          "theme.section_three.third_title": theme.section_three.third_title,
          "theme.section_three.third_description":
            theme.section_three.third_description,
          "theme.section_three.background_color":
            theme.section_three.background_color,
          "theme.section_three.text_color": theme.section_three.text_color,

          "theme.section_four.section_status":
            theme.section_four.section_status,
          "theme.section_four.first_img": theme.section_four.first_img,
          "theme.section_four.top_header": theme.section_four.top_header,
          "theme.section_four.first_title": theme.section_four.first_title,
          "theme.section_four.first_description":
            theme.section_four.first_description,
          "theme.section_four.second_title": theme.section_four.second_title,
          "theme.section_four.second_description":
            theme.section_four.second_description,
          "theme.section_four.background_color":
            theme.section_four.background_color,
          "theme.section_four.text_color": theme.section_four.text_color,
        },
      },
      {
        new: true,
      }
    );
    res.send({
      data: themeCustomization.Theme,
      message: "Online Store Customization Theme Update Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateManyThemes = async (req, res) => {
  try {
    await Theme.updateMany(
      { _id: { $in: req.body.ids } },
      {
        $set: {
          status: req.body.status,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
        },
      },
      {
        multi: true,
      }
    );

    res.send({
      message: "Themes update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const newStatus = req.body.status;

    await Theme.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: newStatus,
        },
      }
    );
    res.status(200).send({
      message: `Theme ${
        newStatus === "show" ? "Published" : "Un-Published"
      } Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteTheme = async (req, res) => {
  try {
    await Theme.deleteOne({ _id: req.params.id });
    res.status(200).send({
      message: "Theme Deleted Successfully!",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteManyThemes = async (req, res) => {
  try {
    await Theme.deleteMany({ _id: req.body.ids });
    res.send({
      message: `Themes Delete Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addTheme,
  // addAllTheme,
  getAllThemes,
  // getShowingThemes,
  getThemeById,
  updateTheme,
  updateStatus,
  deleteTheme,
  updateManyThemes,
  deleteManyThemes,
};
