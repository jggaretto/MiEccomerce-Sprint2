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

module.exports = { getAllProducts, getSuggestedProducts, getProductById };