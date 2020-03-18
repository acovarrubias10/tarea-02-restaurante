export default class Precios{
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this._valor = valor
    }
    getPrecio(){
        return `$${new Intl.NumberFormat("en-UA").format(this._valor)}`
    }
}