import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mViveres extends Cl_mArticulo {
  constructor({ nombre, costo, basico }) {
    super(nombre, costo, 2);
    this.basico = basico;
  }
  set basico(basico) {
    this._basico = basico.toUpperCase() === "SI";
  }
  get basico() {
    return this._basico;
  }
  porcGanancia() {
    if (this.basico) return 0.05;
    else return super.porcGanancia();
  }
}
