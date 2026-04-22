const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '..', 'products.json');

function getAllProducts() {
  const data = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(data);
}

function getSuggestedProducts(limit = 5, randomize = true) {
  const products = getAllProducts();

  if (randomize) {
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }
  }

  return products.slice(0, limit);
}

function getProductById(id) {
  const products = getAllProducts();
  return products.find((p) => p.id === Number(id)) || null;
}

function getFeaturedProducts(limit = 10) {
  const products = getAllProducts();
  const featured = products.filter((p) => p.featured === true);

  for (let i = featured.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [featured[i], featured[j]] = [featured[j], featured[i]];
  }

  return featured.slice(0, limit);
}

function getRelatedProducts(category, excludeId, limit = 4) {
  if (!category) return [];

  const products = getAllProducts();
  const related = products.filter(
    (p) => p.category === category && p.id !== Number(excludeId)
  );

  for (let i = related.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [related[i], related[j]] = [related[j], related[i]];
  }

  return related.slice(0, limit);
}

// ─── US10: filtrar por categoría ──────────────────────────────────────────────
function getProductsByCategory(category) {
  const products = getAllProducts();
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

module.exports = {
  getAllProducts,
  getSuggestedProducts,
  getProductById,
  getFeaturedProducts,
  getRelatedProducts,
  getProductsByCategory,
};