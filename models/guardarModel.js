class GuardarModel {
  constructor({ Nombre, apellido, ahorro }) {
    this.Nombre = Nombre;
    this.apellido = apellido;
    this.ahorro = ahorro;
  }

  isValid() {
    return (
      typeof this.Nombre === 'string' &&
      typeof this.apellido === 'string' &&
      typeof this.ahorro === 'number'
    );
  }
}

module.exports = GuardarModel; 