import Cl_mRopa from "./Cl_mRopa.js";

export default class Cl_vTienda {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formTienda");
    this.tabla = document.getElementById("formTiendaTabla");
    this.btAgregarRopa = document.getElementById("formTiendaBtAgregarRopa");
    this.btAgregarViveres = document.getElementById(
      "formTiendaBtAgregarViveres"
    );
    /** declarar etiquetas de salidas clase mayor */
    this.lblCantViveres = document.getElementById("formTiendaLblCantViveres");
    this.lblCantRopa = document.getElementById("formTiendaLblCantRopa");

    this.btAgregarRopa.onclick = () => {
      this.ocultar();
      this.app.vRopa.mostrar();
    };
    this.btAgregarViveres.onclick = () => {
      this.ocultar();
      this.app.vViveres.mostrar();
    };
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  /** Cambiar nombre de "menor" por el nombre correcto */
  reportarArticulo(articulo) {
    /**
     * Renombrar parámetro "menor"
     * Indicar campos de la tabla
     * */
    this.tabla.innerHTML += `
    <tr>
      <td>${articulo.nombre}</td>
      <td>${articulo instanceof Cl_mRopa ? "Ropa" : "Viveres"}</td>
      <td>${articulo.costo}</td>
      <td>${articulo.color ?? "--"}</td>
      <td>${articulo.basico ?? "--"}</td>
      <td>${articulo.porcGanancia() * 100}</td>
      <td>${articulo.porcDescuento() * 100}</td>
      <td>${articulo.precio()}</td>
    </tr>`;

    /** Asignar valores a etiquetas de salida */
    this.lblCantViveres.innerHTML = this.app.mTienda.cantidadViveres();
    this.lblCantRopa.innerHTML = this.app.mTienda.cantidadRopa();
  }
}
