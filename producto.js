import Precio from "./precio.js"

export default class Producto{
    /**
     * 
     * @param {string} nombre 
     * @param {Precio} precios
     */
    constructor(nombre, precios){
        this._nombre = nombre
        this._precios = precios
    }
    _getPrecioValor(){
        return this._precios.getPrecio()
    }
    _getPrecio(){
        return this._precios
    }
    _getNombre(){
        return this._nombre
    }
    getDescripcion(){
        return `${this._nombre} ${this._precios.getPrecio()}`
    }
}