const { getSuggestedProducts } = require('../models/productModels');

function getIndex(req, res) {
  const suggestedProducts = getSuggestedProducts(5, true);
  res.render('pages/index', { title: 'Inicio', suggestedProducts });
}

module.exports = { getIndex };
