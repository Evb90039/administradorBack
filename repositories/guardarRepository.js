const db = require('../config/firebase');

exports.guardar = async ({ Nombre, apellido, ahorro }) => {
  const docRef = await db.collection('pruebaback').add({ Nombre, apellido, ahorro });
  return docRef.id;
}; 