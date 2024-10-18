import Cl_mViveres from "./Cl_mViveres.js";

export default class Cl_vViveres {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formMenor2");
    this.vista.hidden = true;
    /** Indicar entradas clase menor */
    this.inNombre = document.getElementById("formMenor2InNombre");
    this.inCosto = document.getElementById("formMenor2InCosto");
    this.inBasico = document.getElementById("formMenor2InBasico");

    this.btAceptar = document.getElementById("formMenor2BtAceptar");
    this.btAceptar.onclick = () => this.agregarMenor();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarMenor() {
    /**
     * Renombrar mMenor
     * Renombrar instancia "menor" y construirla con las entradas respectivas
     */
    let viveres = new Cl_mViveres({
      nombre: this.inNombre.value,
      costo: this.inCosto.value,
      basico: this.inBasico.value,
    });
    /** Colocar nombre correcto del procesar */
    this.app.mTienda.procesarArticulo(viveres);
    this.app.vTienda.reportarArticulo(viveres);
    this.ocultar();
    this.app.vTienda.mostrar();
  }
}
