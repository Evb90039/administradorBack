const guardarRepository = require('../repositories/guardarRepository');

exports.guardarEnFirebase = async ({ Nombre, apellido, ahorro }) => {
  // Aquí podrías agregar lógica de negocio adicional si la necesitas
  return await guardarRepository.guardar({ Nombre, apellido, ahorro });
}; 