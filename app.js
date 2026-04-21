// Importamos la dependencia
const express = require('express');
const { getIndex } = require('./controllers/productControllers');

// Instanciamos nuestra app
const app = express();

const port = 3001;

app.set('view engine', 'ejs');

// ─── Rutas ───────────────────────────────────────────────────────────────────
// Para que Express pueda leer los datos que envían en los formularios (req.body)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
// Página de Inicio
app.get('/', (req, res) => {
  res.render('pages/login', { title: 'Iniciar Sesión' });
});

// Index
app.get('/index', getIndex);


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

// Recibir datos del formulario de Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Datos de login recibidos en el servidor:', username, password);
  res.redirect('/index');
});
// Recibir datos del formulario de Registro
app.post('/register', (req, res) => {
  // Ahora extraemos los "name" exactos que pusimos en tu register.ejs
  const { email, password, confirmPassword } = req.body; 
  
  console.log('Nuevo usuario registrado con email:', email);
  
  // Después de registrarse, lo mandamos al login
  res.redirect('/login'); 
});

// Middleware 404 - debe ir al final de todas las rutas
app.use((req, res) => {
    res.status(404).render('pages/error404', { title: 'Página no encontrada' });
});

// Iniciamos el servidor
app.listen(port, () => {
	console.log(`Aplicación funcionando en el puerto ${port}`);
});