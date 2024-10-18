import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mRopa extends Cl_mArticulo {
  constructor({ nombre, costo, color }) {
    super(nombre, costo, 1);
    this.color = color;
  }
  set color(color) {
    this._color = +color;
  }
  get color() {
    return this._color;
  }
  porcDescuento() {
    return this.color === 3 ? 0.1 : 0;
  }
}
