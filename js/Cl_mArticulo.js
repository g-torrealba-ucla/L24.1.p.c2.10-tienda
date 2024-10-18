export default class Cl_mArticulo {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }
  set costo(costo) {
    this._costo = +costo;
  }
  get costo() {
    return this._costo;
  }
  porcGanancia() {
    return 20 / 100;
  }
  porcDescuento() {
    return 0;
  }
  precio() {
    return (
      this.costo +
      this.costo * this.porcGanancia() -
      this.costo * this.porcDescuento()
    );
  }
}
