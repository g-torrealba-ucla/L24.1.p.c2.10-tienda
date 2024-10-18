import Cl_mRopa from "./Cl_mRopa.js";

export default class Cl_mTienda {
  constructor() {
    this.cantRopa = this.cantViveres = 0;
  }
  procesarArticulo(articulo) {
    if (articulo instanceof Cl_mRopa) {
      this.cantRopa++;
    } else this.cantViveres++;
  }
  cantidadRopa() {
    return this.cantRopa;
  }
  cantidadViveres() {
    return this.cantViveres;
  }
}
