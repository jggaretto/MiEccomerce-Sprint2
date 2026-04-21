const { getSuggestedProducts, getFeaturedProducts } = require('../models/productModels');

function getIndex(req, res) {
  const suggestedProducts = getSuggestedProducts(5, true);
  const featuredProducts = getFeaturedProducts(10);
  res.render('pages/index', { title: 'Inicio', suggestedProducts, featuredProducts });
}

module.exports = { getIndex };
