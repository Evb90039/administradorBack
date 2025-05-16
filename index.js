const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});
const db = admin.firestore();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.post('/guardar', async (req, res) => {
  const { Nombre, apellido, ahorro } = req.body;
  if (!Nombre || !apellido || ahorro === undefined) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  try {
    const docRef = await db.collection('pruebaback').add({ Nombre, apellido, ahorro });
    res.json({ id: docRef.id, message: 'Guardado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en Firebase', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 
