const GuardarModel = require('../models/guardarModel');
const guardarService = require('../services/guardarService');

exports.guardar = async (req, res) => {
  const guardarData = new GuardarModel(req.body);
  console.log('Intento de guardar:', guardarData);

  if (!guardarData.isValid()) {
    console.error('Faltan campos requeridos o tipos incorrectos:', guardarData);
    return res.status(400).json({ error: 'Faltan campos requeridos o tipos incorrectos' });
  }
  try {
    const id = await guardarService.guardarEnFirebase(guardarData);
    console.log('Guardado correctamente, ID:', id);
    res.json({ id, message: 'Guardado correctamente' });
  } catch (error) {
    console.error('Error al guardar en Firebase:', error.message);
    res.status(500).json({ error: 'Error al guardar en Firebase', details: error.message });
  }
}; 