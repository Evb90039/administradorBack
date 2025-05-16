const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', require('./routes/guardar'));

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Middleware para manejar errores de JSON inválido
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('JSON inválido recibido:', err.message);
    return res.status(400).json({ error: 'JSON inválido en el body de la petición' });
  }
  next(err);
}); 
