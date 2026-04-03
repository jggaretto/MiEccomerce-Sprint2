// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

const port = 3001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('pages/index');
});

// Iniciamos el servidor
app.listen(port, () => {
	console.log(`Aplicación funcionando en el puerto ${port}`);
});