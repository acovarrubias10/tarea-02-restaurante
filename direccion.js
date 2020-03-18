export default class Direccion {
    /**
     * @param calle
     * @param numeroExt
     * @param numeroInt
     * @param colonia
     * @param coPostal
     * @param municipio
     * @param ciudad
     */
    constructor(calle, numeroExt, numeroInt, colonia, coPostal, municipio, ciudad) {
        this._calle = calle
        this._numeroExt = numeroExt
        this._numeroInt = numeroInt
        this._colonia = colonia
        this._coPostal = coPostal
        this._municipio = municipio
        this._ciudad = ciudad
    }
    getFormatoCorto() {
        return `${this._calle} ${this._numeroExt}`
    }
    getFormatoLargo() {
        return `${this._calle} ${this._numeroExt} ${this._numeroInt} ${this._colonia} ${this._coPostal} ${this._municipio} ${this._ciudad}`
    }
}