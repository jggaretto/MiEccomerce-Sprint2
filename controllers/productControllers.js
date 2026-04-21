const { getSuggestedProducts, getFeaturedProducts } = require('../models/productModels');

function getIndex(req, res) {
  const suggestedProducts = getSuggestedProducts(5, true);
  const featuredProducts = getFeaturedProducts(10);
  res.render('pages/index', { title: 'Inicio', suggestedProducts, featuredProducts });
}

function getProductDetail(req, res) {
  const product = getProductById(req.params.id);

  if (!product) {
    return res.status(404).render('pages/error404', { title: 'Producto no encontrado' });
  }

  const related = getSuggestedProducts(4, true).filter((p) => p.id !== product.id).slice(0, 3);

  res.render('pages/product', { title: product.name, product, related });
}
module.exports = { getIndex, getProductDetail };
