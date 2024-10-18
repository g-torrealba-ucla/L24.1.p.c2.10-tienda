import Cl_mRopa from "./Cl_mRopa.js";

export default class Cl_vRopa {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formMenor1");
    this.vista.hidden = true;
    /** Indicar entradas clase menor */
    this.inNombre = document.getElementById("formMenor1InNombre");
    this.inCosto = document.getElementById("formMenor1InCosto");
    this.inColor = document.getElementById("formMenor1InColor");

    this.btAceptar = document.getElementById("formMenor1BtAceptar");
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
    let ropa = new Cl_mRopa({
      nombre: this.inNombre.value,
      costo: this.inCosto.value,
      color: this.inColor.value,
    });
    /** Colocar nombre correcto del procesar */
    this.app.mTienda.procesarArticulo(ropa);
    this.app.vTienda.reportarArticulo(ropa);
    this.ocultar();
    this.app.vTienda.mostrar();
  }
}
