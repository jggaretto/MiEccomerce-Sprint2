const {
  getSuggestedProducts,
  getFeaturedProducts,
  getProductById,
  getRelatedProducts,
  getProductsByCategory,
} = require('../models/productModels');

function getIndex(req, res) {
  const suggestedProducts = getSuggestedProducts(5, true);
  const featuredProducts  = getFeaturedProducts(10);
  res.render('pages/index', { title: 'Inicio', suggestedProducts, featuredProducts });
}

function getProductDetail(req, res) {
  const product = getProductById(req.params.id);

  if (!product) {
    return res.status(404).render('pages/error404', { title: 'Producto no encontrado' });
  }

  const related = getRelatedProducts(product.category, product.id, 4);
  res.render('pages/product', { title: product.name, product, related });
}

// ─── US10: listado por categoría ──────────────────────────────────────────────
function getCategory(req, res) {
  const category = req.params.category;
  const products = getProductsByCategory(category);

  res.render('pages/category', {
    title: `Categoría: ${category}`,
    category,
    products,
  });
}

module.exports = { getIndex, getProductDetail, getCategory };