// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

const port = 3001;

app.set('view engine', 'ejs');

// ─── Rutas ───────────────────────────────────────────────────────────────────
// Para que Express pueda leer los datos que envían en los formularios (req.body)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Página de Inicio
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Inicio' });
});

// Página de Productos
app.get('/products', (req, res) => {
  res.render('pages/product', { title: 'Productos' });
});

// Página del Carrito
app.get('/cart', (req, res) => {
  res.render('pages/cart', { title: 'Carrito' });
});

// Página de Pago
app.get('/checkout', (req, res) => {
  res.render('pages/checkout', { title: 'Checkout' });
});

// Página de Login
app.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Iniciar Sesión' });
});

// Página de Registro
app.get('/register', (req, res) => {
  res.render('pages/register', { title: 'Registrarse' });
});


// Iniciamos el servidor
app.listen(port, () => {
	console.log(`Aplicación funcionando en el puerto ${port}`);
});