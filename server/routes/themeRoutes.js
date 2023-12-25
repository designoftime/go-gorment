const express = require('express');
const router = express.Router();
const {
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
} = require('../controller/themeController');

//add a Theme
router.post('/add', addTheme);

//add multiple Theme
// router.post('/add/all', addAllTheme);

//get all Theme
router.get('/', getAllThemes);

//get only enable Theme
// router.get('/show', getShowingThemes);

// //get a Theme
router.get('/:id', getThemeById);

//update a Theme
router.put('/:id', updateTheme);

//update many Theme
router.patch('/update/many', updateManyThemes);

//show/hide a Theme
router.put('/status/:id', updateStatus);

//delete a Theme
router.delete('/:id', deleteTheme);

//delete many Theme
router.patch('/delete/many', deleteManyThemes);

module.exports = router;
