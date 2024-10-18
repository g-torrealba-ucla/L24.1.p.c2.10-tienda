import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vRopa from "./Cl_vRopa.js";
import Cl_vViveres from "./Cl_vViveres.js";
import Cl_mTienda from "./Cl_mTienda.js";
/** Reemplazar en todo el documento por el nombre correcto de cada clase:
 * Cl_vMenor, Cl_vTienda, Cl_mTienda, Cl_mMenor1, Cl_mMenor2
 * Renombrar los archivos de las vistas por el nombre correcto de cada clase
 */
export default class Cl_main {
  constructor() {
    this.app = {};
    this.app.mTienda = new Cl_mTienda();
    this.app.vRopa = new Cl_vRopa(this.app);
    this.app.vViveres = new Cl_vViveres(this.app);
    this.app.vTienda = new Cl_vTienda(this.app);
  }
}
